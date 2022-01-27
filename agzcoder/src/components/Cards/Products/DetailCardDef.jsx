import React from 'react';
import '../Card.modules.css';
import CounterTab from "../../Buttons/CounterTab";
import { Link } from 'react-router-dom';


function DetailCardDef (imageSrc , name, price, ingredient, stock) {
  return (
      <section className='detailCard'>
          <img className="detailCard__image" src={imageSrc} alt={name} />
          <div className='detailCard__container'>
              <div className='detailCard__head'>
                  <div className='detailCard__title'><h2>{name}</h2></div>
                  <button className='detailCard__btnBack'><Link to='/Store'>Volver</Link></button>
              </div>
              <div className='detailCard__foot'>
                  <p className='detailCard__ingredient'>{ingredient}</p>
                  <div className="cardProducts__amountBox">
                    <p className="cardProducts__price">Precio:$ {price}</p>
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
