import React from 'react';
import '../Card.modules.css';
import CounterTab from "../../Buttons/CounterTab";
import { Link } from 'react-router-dom';


function DetailCardDef ({imageSrc , name,  ingredient, price, stock}) {
  return (
    <section className='detailCard'>
    <div className='detailCard__container'> 
        
        <img className="detailCard__image" src={imageSrc} alt={name} />                    
        
        <div className='detailCard__titleBox'>
            <div className='detailCard__title'>{name}</div>
        </div>

        <div className='detailCard__drop'>
            
            <div className='detailCard__btnBackBox'>
                <button className='detailCard__btnBack'>
                    <Link to='/Store' className='detailCard__btnBackLink'>Volver</Link>
                </button>
            </div>
            
            <div className='detailCard__ingredientBox'>
                <p className='detailCard__ingredient'>{ingredient}</p>
            </div>
            
            <div className="detailCard__amountBox">    
                <p className="detailCard__price">Precio:$ {price}</p>
                <CounterTab onStock={stock}/>
            </div>
            
            <div className='detailCard__btns'>
                <button className='detailCard__btnBuyNow'>comprar ahora</button>
                <button className='detailCard__btnAddCart'>agregar al carrito</button>
            </div>

        </div>
        
    </div>
</section>
  );
};

export default DetailCardDef;
