import React from 'react';
import './App.css';
import Header from './components/Header';
import ProductImg from './components/ProductImg';
import ProductInfo from './components/ProductInfo';


function App() {
  return (
    <React.Fragment>
      <div className='container'>
        <Header />
      </div>
      <div className='scontainer product_div' >
        <ProductImg />
        <ProductInfo />
      </div>
    </React.Fragment>
  )
}

export default App