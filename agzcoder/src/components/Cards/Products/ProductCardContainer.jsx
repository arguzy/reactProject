import React, { Fragment } from 'react';
import ProductCardDef from '../Cards/Products/ProductCardDef';


const ProductCardContainer = () => {
    return (
        <Fragment>
        <div>
            <ProductCardDef 
            imageSrc={'../../../Media/Appetizer/LittleWing.jpg'}
            name='Little Wing'
            ingredient='Pechuguitas pollo extra crocantes, sazonadas con tomillo, albahaca, orégano, sal de apio, pimienta negra, mostaza en polvo, pimentón, sal de ajo y jengibre en polvo. Viene con dip de salsa barbacoa.'
            price="$480"/>
        </div>
        
        <div>
            <ProductCardDef 
            imageSrc={'../../../Media/Appetizer/Everlong.jpg'}
            name='Everlong'
            ingredient='Cubos de Mandioca (Yuca) empanados con sazonado de perejil, ajo y mostaza ahumada en polvo. Viene con dip de manteca de cilantro y limón.'
            price="$350"/>
        </div>
        </Fragment>

    )
}

export default ProductCardContainer
