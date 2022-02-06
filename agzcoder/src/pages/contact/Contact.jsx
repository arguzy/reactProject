import React, { useState } from 'react'

const ContactPage = () => {
    const [counter, setCounter] = useState(1);
    const [amount, setAmount] = useState();
    
    const plus = (stock)=>{
        if(counter < stock){
        setCounter((prevState)=> prevState + 1)
    
        
    }
    }

    const minus = () =>{
        if(counter > 1){
            setCounter((prevState)=> prevState - 1)
           
        }
    }
    
    const subtotal = (counter, price)=>{setAmount(price * counter);}

    return (
        <div>
            <h1>Padre:</h1>
                <p>Unidades Solicitadas {counter}</p>
            <Hijo minus={minus} plus={plus} price={10} stock={5} counter={counter} subtotal={subtotal} amount={amount}/>
        </div>
    )
}
export default ContactPage

const Hijo = ({minus, plus, price, stock, counter, subtotal, amount}) =>{
    return(
        <div>
            <h2>Hijo:</h2>
                <p onChange={subtotal(counter , price)}>{amount}</p>
            <Nieto minus={minus} plus={plus} price={price} stock={stock} counter={counter} subtotal={subtotal}/>
        </div>
    )
}

const Nieto = ({plus, minus, stock,  price, subtotal, counter,}) =>{


    return(
        <div>
            <h2>Nieto</h2> 
            <button onClick={()=> {plus (stock , price); subtotal(counter , price);} }>Mas</button>
            <button onClick={()=> {minus (price);  }}>Menos</button>
        </div>
    )
}
