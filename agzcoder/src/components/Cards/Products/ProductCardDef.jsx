import React, {useState} from 'react';
import {BsArrowDownLeftCircle} from 'react-icons/bs';
import CounterTab from "../../Buttons/CounterTab";
import '../Card.modules.css';

function ProductCardDef ({imageSrc , name, ingredient, price, stock}) {
    const [DropDawn, setDropDawn] = useState(false)
    const DropBtn = ()=>{
        setDropDawn(!DropDawn)
    }
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
                    <div className="cardProducts__btnDescription" >
                        <button className="dropDownDescription" onClick={DropBtn}> 
                            <span className='dropDownDescription__icon'>
                                <BsArrowDownLeftCircle className={DropDawn ? 'dropDownClose' : 'dropDownOpen'}/>
                            </span>
                            <span className="dropDownDescription__text">
                                Descripción
                            </span>
                        </button>
                    </div>
                </div>
                <div className={DropDawn ? "cardProducts__textBox textBoxOpen" : "cardProducts__textBox"}>
                    <p className="cardProducts__text">{ingredient}</p>
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
