import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from '../../components/Widgets/Spinner';
import DetailCardDef from '../../components/Cards/Products/DetailCardDef';


const ProductDetail = () => {



    const {ident} = useParams();
  
    const [product, setProduct] = useState([]);
    const [errors, setErrors] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
  
      useEffect(()=>{
          const URL = `http://localhost:3001/inventory/${ident}`
          setIsLoading(true);
  
          fetch(URL)
          .then((res) => res.json())
          .then((data) => setProduct(data))
          .catch((err) => setErrors(err))
          .finally(() => setIsLoading(false));

        
   
      }, [ident]);
      
      if(isLoading){

          return <Spinner/>
      }else if(errors){
          return <p>"Errorazo"</p>;
          } 
        return (         
                <DetailCardDef
                imageSrc={product.imageSrc}
                name={product.name}
                ingredient={product.ingredient}
                price={product.price}
                stock={product.stock}/>
                
        )
}
            
export default ProductDetail;