import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from '../../components/Widgets/Spinner';

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
          .cath((err) => setErrors(err))
          .finally(() => setIsLoading(false));
  

   
      }, [ident]);
      
      if(isLoading){

          return <Spinner/>
      }else if(errors){

          return <p>"Errorazo"</p>;
      } 
  
      return(
      <div>
          <p>Aquí esta el product {product.name}</p>
      </div>
      );
      
  };

export default ProductDetail;