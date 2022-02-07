import { createContext, useState } from "react";

const CartContext = createContext({});

export default CartContext;

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (id, imageSrc, category,  name,  ingredient,  price,  stock, quantity) => {
      if (cart.length <= 0){
          setCart((prevState) => [...prevState, {id, imageSrc, category,  name,  ingredient,  price,  stock, quantity}]);
          console.log(cart)
        }
    else {
        setCart((prevState) => [...prevState, [id, imageSrc, category,  name,  ingredient,  price,  stock, quantity]]);
        
        
      
            //setCart((prevState) => console.log(prevState.item))
            //const idFollow = cart.find(element => element.item.id === cart.item.id )
            //if(idFollow === undefined){
            //    console.log("no repite "+idFollow)
            //    setCart((prevState) => [...prevState, [item, quantity]]);
            //} else{
            //    console.log("repite "+idFollow)
            //}
        }
    }

    //const newProduct = [item, quantity];
    //console.log(newProduct);
    //setCart((prevState) => [...prevState, newProduct]);
    //console.log(cart);

    
    const eraseItem = (id) =>{
        setCart ((prev) => prev.filter((element) => element.item.id !== id))
    };
    
    const eraseItemAll = () =>{
        setCart ([]);
    };
    
    return (
        <CartContext.Provider value={{ cart, addItem, eraseItem, eraseItemAll }}>
      {children}
    </CartContext.Provider>
  );
};

