import React from 'react';
import './DetailCard.modules.css'

const ProductDetail2 = () => {
  return (
      <section className='detailCard'>
          <div className='detailCard__image'>imagen</div>
          <div className='detailCard__container'>
              <div className='detailCard__head'>
                  <div className='detailCard__title'><h2>titulo</h2></div>
                  <button>Volver</button>
              </div>
              <div className='detailCard__foot'>
                  <p className='detailCard__ingredient'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus non incidunt rerum sit temporibus est illum molestias, aliquid harum sunt minus, neque iste corrupti vel consequatur sint libero nesciunt enim.</p>
                  <div className='detailCard__btns'>
                      <button className='detailCard__btnBuyNow'>comprar ahora</button>
                      <button className='detailCard__btnAddCart'>agregar al carrito</button>
                  </div>
              </div>
          </div>
      </section>
  );
};

export default ProductDetail2;
