import React, { Fragment } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './Styles.css';

import Navbar from './components/Navigation/Navbar';
import Home from './Pages/Home/Home';
import Contact from './Pages/Contact';
import Faqs from './Pages/Faqs';
import Store from './Pages/Store/Store';
import ProductDetail from './Pages/Store/ProductDetail';
import ProductDetail2 from './Pages/Store/ProductDetail2';
import OrderSumary from './Pages/Store/OrderSumary';
//import PageNotFound from './Pages/PageNotFound';
import Footer from './components/Footer/Footer';



function App() {



  return (
    <Fragment>
      <BrowserRouter>
        <header>
          <Navbar/>
        </header>
        
              <Routes >
                <Route path='/'>
                  <Route index element={<Home/>} />
                  <Route path='Contact' element={<Contact/>} />
                  <Route path='Faqs' element={<Faqs/>} />
                  <Route path='Store'> 
                    <Route index element={<Store/>}/>
                    <Route path='ProductDetail2' element={<ProductDetail2/>} />
                    <Route path=':ident' element={<ProductDetail/>} />
                    <Route path='OrderSumary' element={<OrderSumary/>} />
                  </Route> 
                </Route>
              </Routes>
        
        <footer>
          <Footer/>
        </footer>
      </BrowserRouter>
    </Fragment>
    
  );
}

export default App;
