import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import { ImCart } from 'react-icons/im';
import {FaBars} from 'react-icons/fa'

    const Navbar = () => {
        
        const [show, setShow] = useState(false);
        const ToggleMenu = ()=>{
            setShow(!show)
        } 

        return ( 
            <nav className={show ? 'nav' : 'nav fixed'}>
                <div className='nav__motley'>
                    <Link to='Home' className='nav__logo'>LA BOHEME</Link>
                    <div className='nav__shop'>
                        <span><Link to={'OrderSumary'} className='nav__shopIcon'><ImCart/></Link><p className='nav__shopConunt'>0</p></span>
                    </div>
                </div>
                <button className='nav__btnToggle' onClick={ToggleMenu}><FaBars/></button>
                <ul className={show ? 'nav__menu nav__menuVisible' : 'nav__menu'} >
                    <li className='nav__menuItem'><Link to='./Home' className='nav__menuLink'>Inicio</Link></li>
                    <li className='nav__menuItem'><Link to='./Contact' className='nav__menuLink'>Quiénes Somos</Link></li>
                    <li className='nav__menuItem'><Link to='./Store' className='nav__menuLink'>Menú y Delivery</Link></li>
                    <li className='nav__menuItem'><Link to='./Faqs' className='nav__menuLink'>Preguntas Frecuentes</Link></li>
                    <span className='nav__menuIndicator'></span>
                </ul>
            </nav>
        );
    }

 
export default Navbar;