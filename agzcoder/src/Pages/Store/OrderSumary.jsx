import React from "react";
import { useCart } from "../../context/CartContext";

const OrderSumary = () => {
  const {cart} = useCart();
  console.log(cart)
  return (
    <div>
      <h1>vista previa</h1>
      {cart.map((orderbuy)=>{
        return(
          <div key={orderbuy.product.id}>
            <img src={orderbuy.product.imageSrc} alt={orderbuy.product.name} />
            <p>{orderbuy.product.name}</p>
            <p>{orderbuy.quantity}</p>
          </div>
        )
      }
      )
      }
      <h1>Vista Previa de la Compra</h1>
    </div>
  );
};

export default OrderSumary;
