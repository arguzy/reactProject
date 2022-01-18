import React from 'react'
import { Link } from 'react-router-dom';
import { ImCart } from 'react-icons/im';

const Cart = () => {
    return (
        <div>
            <span><Link to={'OrderSumary'} className='nav__shopIcon'><ImCart/></Link><p className='nav__shopConunt'>0</p></span>
        </div>
    )
}

export default Cart
