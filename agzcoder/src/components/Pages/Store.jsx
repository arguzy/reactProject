import React, {Fragment} from 'react';
import ProductCardDef from '../Cards/Products/ProductCardDef';
import LittleWing from '../../Media/Appetizer/LittleWing.jpg';
import Everlong from '../../Media/Appetizer/Everlong.jpg';
import './Store.modules.css';


const Store = () => {
    return (
        <Fragment>
            <section className='menu__Appetizer'>
        <div>
            <ProductCardDef 
            imageSrc={LittleWing}
            name='Little Wing'
            ingredient='Pechuguitas pollo extra crocantes, sazonadas con tomillo, albahaca, orégano, sal de apio, pimienta negra, mostaza en polvo, pimentón, sal de ajo y jengibre en polvo. Viene con dip de salsa barbacoa.'
            price="$480"/>
        </div>
        
        <div>
            <ProductCardDef 
            imageSrc={Everlong}
            name='Everlong'
            ingredient='Cubos de Mandioca (Yuca) empanados con sazonado de perejil, ajo y mostaza ahumada en polvo. Viene con dip de manteca de cilantro y limón.'
            price="$350"/>
        </div>
            </section>
        </Fragment>
    )
}

export default Store
