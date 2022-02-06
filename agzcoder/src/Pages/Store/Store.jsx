import React, {useEffect, useState} from 'react';
import ProductCard from '../../components/cards/ProductCard'
import Spinner from '../../components/widgets/Spinner';
import PageNotFound from '../errors/PageNotFound';
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
        return <PageNotFound/>;
    } 
    

    return (
                <section className='menu'>
                    <div className='menu__cover'>
                        <div className='menu__titleBox' >
                            <h1  className='menu__title'>APPETIZERS</h1>
                            <h1  className='menu__title'>APPETIZERS</h1>
                            <h1  className='menu__title'>APPETIZERS</h1>
                        </div>
                <div className='menu__productBox' >
                {products.map((product)=>{   
                    
                    if (product.category === "appetizer") {
                        
                            return(
                            <div className='menu__product' key={product.id}>

                                <ProductCard
                                imageSrc={product.imageSrc}
                                name={product.name}
                                ident={product.id}
                                price={product.price}
                                stock={product.stock}/>
                            </div>
                            )
                            } else{return(null)};
                        })}
                </div>
            </div>
            <div className='menu__cover'>
                <div className='menu__titleBox'>
                    <h1  className='menu__title'>HAMBURGUEZAS</h1>
                    <h1  className='menu__title'>HAMBURGUEZAS</h1>
                    <h1  className='menu__title'>HAMBURGUEZAS</h1>
                </div>
                <div className='menu__productBox'>
                {products.map((product)=>{   
                    
                    if (product.category === "burger") {
                        
                            return(
                            <div className='menu__product'  key={product.id}>
                                <ProductCard
                                imageSrc={product.imageSrc}
                                name={product.name}
                                ident={product.id}
                                price={product.price}
                                stock={product.stock}/>
                            </div>
                            )
                            } else{return(null)};
                        })}
                </div>
            </div>
            <div className='menu__cover'>
                <div className='menu__titleBox'>
                    <h1  className='menu__title'>CERVEZAS</h1>
                    <h1  className='menu__title'>CERVEZAS</h1>
                    <h1  className='menu__title'>CERVEZAS</h1>
                </div>
                <div className='menu__productBox'>
                {products.map((product)=>{   
                    
                    if (product.category === "beer") {
                        
                            return(
                            <div className='menu__product' key={product.id}>
                                <ProductCard
                                imageSrc={product.imageSrc}
                                name={product.name}
                                ident={product.id}
                                price={product.price}
                                stock={product.stock}/>
                            </div>
                            )
                            } else{return(null)};
                        })}
                </div>  
            </div>
        </section>
        

        


)
}


export default Store
