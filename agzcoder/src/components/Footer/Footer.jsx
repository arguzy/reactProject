import { Link } from 'react-router-dom';
import SocialMedia from '../buttons/SocialMedia';
import Newsletter from '../widgets/Newsletter';
import './Footer.modules.css';

const Footer = () => {
  return (
  <section className='foot'>
      <div className='foot__siteMap'>
        <ul className='foot__siteMapList' aria-label='Mapa del Sitio' >
            <li className='foot__siteMapListItem'><Link to='./' className='foot__siteMapListLink'>Inicio</Link></li>
            <li className='foot__siteMapListItem'><Link to='./Contact' className='foot__siteMapListLink'>Quiénes Somos</Link></li>
            <li className='foot__siteMapListItem'><Link to='./Store' className='foot__siteMapListLink'>Menú y Delivery</Link></li>
            <li className='foot__siteMapListItem'><Link to='./Faqs' className='foot__siteMapListLink'>Preguntas Frecuentes</Link></li>
        </ul>
      </div>
        <Newsletter/>
        <SocialMedia/>
  </section>
  );
};

export default Footer;
