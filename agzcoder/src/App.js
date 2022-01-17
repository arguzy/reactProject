import React, { Fragment } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './Styles.css';

import Navbar from './components/Navigation/Navbar';
import Home from './components/Pages/Home';
import Contact from './components/Pages/Contact';
import Faqs from './components/Pages/Faqs';
import Store from './components/Pages/Store';
import OrderSumary from './components/Pages/OrderSumary';



function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <header>
          <Navbar/>
              <Routes>
                <Route exact path='/Home' element={<Home/>} />
                <Route path='/Contact' element={<Contact/>} />
                <Route path='/Faqs' element={<Faqs/>} />
                <Route path='/Store' element={<Store/>} />
                <Route path='/OrderSumary' element={<OrderSumary/>} />
              </Routes>
        </header>
      </BrowserRouter>
    </Fragment>
    
  );
}

export default App;
