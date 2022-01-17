import React, { useState } from "react";
import './ProductCard.module.css'

const ProductCard = () => {
  const [checked, setChecked] = useState(true);
  const [commentaries, setCommentaries] = useState("");

  return (
    <div>
      <img src="" alt="" />

      <h2></h2>
      <span>
        <p>Ingredientes</p>
        <button>CAMBIAR</button>
      </span>
      <form>
        <label>
          <input
            type="checkbox"
            defaultChecked={checked}
            onChange={() => setChecked(!checked)}
          />
          {Ingredient}
        </label>
        <label>
          Comentarios:
          <input
            type="text"
            value={commentaries}
            onChange={(e) => setCommentaries(e.target.value)}
          />
        </label>
      </form>
      <span>
        <p>Acompañamiento</p>
        <button>PEDIR</button>
      </span>
    </div>
  );
};

export default ProductCard;
