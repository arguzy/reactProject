import React, { useContext } from 'react'
import ProductCard from '../../components/cards/ProductCard';
import Spinner from '../../components/widgets/Spinner';
import CartContext from '../../context/CartContext';
import PageNotFound from '../errors/PageNotFound';

const Faqs = () => {
  const {products, errors, isLoading} = useContext(CartContext);
 
if(isLoading){
    return <Spinner/>
}else if(errors){
    return <PageNotFound/>;
}
    return (
        <div>
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
    )
}

export default Faqs
