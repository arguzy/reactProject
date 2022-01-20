import React, {useState} from 'react';
import './Buttons.css';
import {FaPlus, FaMinus} from 'react-icons/fa';

const CounterTab = () => {

    const [counter, setCounter] = useState(1);
    let stock = 10

    const Plus = () =>{
        if (counter < stock){
        setCounter(counter + 1);
    }
    }
    const Minus = () =>{
        if (counter > 1){
        setCounter(counter - 1);}
    }

    return (
        <div className='counterBox'>
        <button className="counterBox__button" onClick={Minus}><FaMinus/></button>
        <p className="counterBox__num">{counter}</p>
        <button className="counterBox__button" onClick={Plus}><FaPlus/></button>
        
        </div>
    )
}

export default CounterTab


