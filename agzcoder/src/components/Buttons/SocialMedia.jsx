import { RiFacebookCircleLine, RiInstagramLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const SocialMedia = () => {
  return (
    <div className='foot__social'>
        <ul className='foot__socialList'>
            <li className='foot__socialItem'>
            <Link to={'https://es-la.facebook.com/LaBohemeBuenosAires/'}/> <RiFacebookCircleLine className='foot__socialLink'/>
            </li>
            <li className='foot__socialItem'>
               <Link to={'https://www.instagram.com/laboheme_buenosaires/?hl=es'}/><RiInstagramLine className='foot__socialLink'/> 
            </li>
        </ul>
    </div>
);
};

export default SocialMedia;
