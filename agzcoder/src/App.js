import React, { Fragment } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
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
                <Route Path='Home' element={Home} />
                <Route Path='Contact' element={Contact} />
                <Route Path='Faqs' element={Faqs} />
                <Route Path='Store' element={Store} />
                <Route Path='OrderSumary' element={OrderSumary} />
              </Routes>
        </header>
      </BrowserRouter>
    </Fragment>
    
  );
}

export default App;
