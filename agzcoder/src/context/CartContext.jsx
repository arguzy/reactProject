import { createContext, useContext, useState } from "react";

export const CartContext = createContext({});

export const CartProvider = ({ children }) => {

  const [cart, setCart] = useState([]);
  
  
  const addProduct = (product, quantity) => {
   const preOrder = {product, quantity}

    if (cart.length <= 0){
      setCart((prevState) => [...prevState, {product , quantity}]);
    } 
    else {
      if (cart.length >= 1){
        let idFollow = cart.find(e => e.product.id === preOrder.product.id);
         

          if(idFollow == undefined){
            setCart((prevState) => [...prevState, {product , quantity}]);
              

          } else{
            for (let i= 0; i < cart.length; i++){
              if(cart[i].product.id === preOrder.product.id){
                let stockCheck = cart[i].quantity + preOrder.quantity;
                if(stockCheck <= cart[i].product.stock){
                  cart[i].quantity =  cart[i].quantity + preOrder.quantity;

                } else { alert("se superó el stock")}

              }
            }
          }
      }

    }
    
    


    }

  

    
    const eraseProduct = (id) =>{
        setCart ((prev) => prev.filter((element) => element.item.id !== id))
    };
    
    const eraseAllProduct = () =>{
        setCart ([]);
    };
    
    return (
        <CartContext.Provider value={{ cart, addProduct, eraseProduct, eraseAllProduct }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);