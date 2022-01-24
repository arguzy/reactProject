import React, {useEffect, useState} from 'react';
import ProductCardDef from '../Cards/Products/ProductCardDef';
import './Store.modules.css';
import Spinner from '../Widgets/Spinner';


const Store = () => {

    const [products, setProducts] = useState([]);
    const [errors, setErrors] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const URL = "http://localhost:3001/listProducts";
        
            setIsLoading(true);

                const getProducts = async ()=>{

                    try{
                        const response = await fetch(URL);
                        const data = await response.json();  
                        setProducts(data);
                        } catch(err){
                            setErrors(err)
                        } finally{
                            setIsLoading(false);
                        }
        };
    
        setTimeout(() => {        
            getProducts();
        }, 2000);
    }, []);
    
    if(isLoading){
        return <Spinner/>
    }else if(errors){
        return <p>"Errorazo"</p>;
    }
    
    


    return (
        <section className='allProducts'>
                {products.map((product)=>{
                return (
                
                    <div key={product.id}>
                        <ProductCardDef  
                        imageSrc={product.imageSrc}
                        name={product.name}
                        ingredient={product.ingredient}
                        price={product.price}
                        stock={product.stock}/>
                    </div>
                )
            })}
        
         
        </section>
    )
}

export default Store
