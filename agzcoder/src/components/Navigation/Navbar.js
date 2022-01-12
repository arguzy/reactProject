import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import 'https://kit.fontawesome.com/6732692091.js';




    const Navbar = () => {
        
        const [state, setState] = useState(false);
        const ToggleMenu = ()=>{
            setState(!state)
        } 

        return ( 
            <nav className='nav'>
                <div className='nav__motley'>
                    <Link to='Home' className='nav__logo'>LA BOHEME</Link>
                    <div className='nav__shop'>
                        <span><Link to={'OrderSumary'} className='nav__shopIcon'><i className="fas fa-shopping-cart"></i></Link><p className='nav__shopConunt'>0</p></span>
                    </div>
                </div>
                <button className='nav__btnToggle' onClick={ToggleMenu}><i className="fas fa-bars"></i></button>
                <ul className={state ? 'nav__menu nav__menuVisible' : 'nav__menu'} >
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