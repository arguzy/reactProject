import React from "react";
import "./Card.modules.css";
import CounterTab from "../buttons/CounterTab";
import { Link } from "react-router-dom";

import { useCart } from "../../context/CartContext";


function DetailCard({product,  minus, plus,  counter,  amount,  subtotal}) {

  const {addProduct} = useCart();

  const {imageSrc,  name,  ingredient,  price,  stock} = product;
  
  const handleClickAdd = () =>{
    addProduct(product, counter)
  }

  return (
    <section className="detailCard">
      <div className="detailCard__container">
        <img className="detailCard__image" src={imageSrc} alt={name} />

        <div className="detailCard__titleBox">
          <div className="detailCard__title">{name}</div>
        </div>

        <div className="detailCard__drop">
          <div className="detailCard__btnBackBox">
            <button className="detailCard__btnBack">
              <Link to="/Store" className="detailCard__btnBackLink">
                Volver
              </Link>
            </button>
          </div>

          <div className="detailCard__ingredientBox">
            <p className="detailCard__ingredient">{ingredient}</p>
          </div>
          {stock === counter && (
              <div className="detailCard__fullStockTaked">
                <p>No quedan más unidades</p>
              </div>
            )}
          <div className="detailCard__amountBox">
            <p
              className="detailCard__price"
              onChange={subtotal(counter, price)}
            >
              Precio $ {amount}
            </p>

            <CounterTab
              onStock={stock}
              minus={minus}
              plus={plus}
              counter={counter}
              price={price}
              subtotal={subtotal}
            />
          </div>
          <div className="detailCard__btns">
            <button className="detailCard__btnAddCart">
              <Link to="/Store" >Continuar Comprando </Link>
            </button>
            <button className="detailCard__btnBuyNow">
              <Link to="/OrderSumary">Finalizar Compra </Link>
            </button>
            <button onClick={handleClickAdd}>check</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DetailCard;
