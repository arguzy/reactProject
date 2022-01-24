import React, { Fragment } from 'react';
import './Home.modules.css';

const Home = () => {


    return (
        <Fragment>
        <section className='hero'>
            <div className='hero__titleBox'>
                <h1 className='hero__title'>LA BOHÈME</h1>
            </div>
            <div className='hero__subtitleBox'>
                <p className='hero__subtitle'>...un modo de vida apartado de las normas y convenciones gastronómicas, como tributo al paladar...</p>
            </div>
            <div className="hero__btnBox">
                <button className="hero__btn">Delivery</button>
                <button className="hero__btn">Take Away</button>
            </div>
        </section>
        </Fragment>
    )
}

export default Home
