import React from 'react';
import {MdOutlineSubject} from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import CounterTab from "../../Buttons/CounterTab";
import '../Card.modules.css';

function ProductCardDef ({ident, imageSrc , name, price, stock}) {

    const navigate = useNavigate();
    
    return (
        
        <div className="cardProducts">
            <div className="cardProducts__ImageBox">
                <img className="cardProducts__Image" src={imageSrc} alt={name} />
            </div>
            <div className="cardProducts__infoBox">
                <div>
                    <div className="cardProducts__titleBox">
                        <h2 className="cardProducts__title">{name}</h2>
                    </div>
                    <button className="cardProducts__DetailBtn" onClick={() => navigate(`ProductDetails/${ident}`)}> 
                    <span className='cardProducts__DetailBtnIcon'><MdOutlineSubject className='DetailEfxOff'/></span>
                    <span className="cardProducts__DetailBtnText">Ver Más!</span>
                    </button>
                </div>

                <div className="cardProducts__amountBox">
                    <p className="cardProducts__price">Precio:$ {price}</p>
                    <CounterTab onStock={stock}/>
                </div>
                <div className="cardProducts__btnBuyBox">
                <button className="cardProducts__btnBuy">Agregar</button>
                </div>
            </div>
        </div>
    )
}

export default ProductCardDef
