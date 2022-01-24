import React, {useState} from 'react';
import {FaPlus, FaMinus} from 'react-icons/fa';
import './Buttons.css';



const CounterTab = ({onStock}) => {

    const [counterNumber, setCounter] = useState(1);

    const Plus = () =>{
        if (counterNumber < onStock){
            setCounter(counterNumber + 1)};
        }
    
    const Minus = () =>{
        if (counterNumber > 1){
            setCounter(counterNumber - 1)};
        }

    return (
        <div className='counterBox'>
        <button className="counterBox__button" onClick={Minus}><FaMinus/></button>
        <p className="counterBox__num">{counterNumber}</p>
        <button className="counterBox__button" onClick={Plus}><FaPlus/></button>
        </div>
    );
}

export default CounterTab


