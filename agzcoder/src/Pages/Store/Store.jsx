import React, {useEffect, useState} from 'react';
import ProductCardDef from '../../components/Cards/Products/ProductCardDef';
import Spinner from '../../components/Widgets/Spinner';
import './Store.modules.css';


const Store = () => {

    const [products, setProducts] = useState([]);
    const [errors, setErrors] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const URL = "http://localhost:3001/inventory";
        
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
    
            
            getProducts();
     
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
                        ident={product.id}
                        price={product.price}
                        stock={product.stock}/>
                    </div>
                )
            })}
        
         
        </section>
    )
}

export default Store
