import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from '../../components/Widgets/Spinner';
import { Link } from 'react-router-dom';
import CounterTab from '../../components/Buttons/CounterTab'


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
                
                    <section className='detailCard'>
                        <img className="detailCard__image" src={product.imageSrc} alt={product.name} />
                        <div className='detailCard__container'>
                            <div className='detailCard__head'>
                                <div className='detailCard__title'><h2>{product.name}</h2></div>
                                <button className='detailCard__btnBack'><Link to='/Store'>Volver</Link></button>
                            </div>
                            <div className='detailCard__foot'>
                                <p className='detailCard__ingredient'>{product.ingredient}</p>
                                <div className="cardProducts__amountBox">
                                <p className="cardProducts__price">Precio:$ {product.price}</p>
                                    <CounterTab onStock={product.stock}/>
                                </div>
                                <div className='detailCard__btns'>
                                    <button className='detailCard__btnBuyNow'>comprar ahora</button>
                                    <button className='detailCard__btnAddCart'>agregar al carrito</button>
                                </div>
                            </div>
                        </div>
                </section>
                )
            }
            
export default ProductDetail;