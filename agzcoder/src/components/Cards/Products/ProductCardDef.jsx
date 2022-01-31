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
                </div>

                <div className="cardProducts__amountBox">
                    <p className="cardProducts__price">Precio:$ {price}</p>
                    <CounterTab onStock={stock}/>
                </div>
                <div className="cardProducts__btnBox">
                    <button className="cardProducts__DetailBtn" onClick={() => navigate(`Store/${ident}`)}>
                        <span className='cardProducts__DetailBtnIcon'><MdOutlineSubject/></span>
                        <span className="cardProducts__DetailBtnText">Ver Más!</span>
                    </button>
                    <button className="cardProducts__btnBuy">Comprar</button>
                </div>
            </div>
        </div>
    )
}

export default ProductCardDef
