import './App.css';
import Navbar from './component/Navbar';
import Path from './component/Path.js';
import { BrowserRouter } from 'react-router-dom';
import ProductList from './component/Product/ProductList.js';
import { useState } from 'react';

function App() {
  // Add to cart
  const [cart, setCart] = useState([])
  //product detail
  const [close, setClose] = useState(false)
  const [detail, setDetail] = useState([])
  //filter product
  const [product, setProduct] = useState(ProductList )
  const searchBtn = (product) => {
    const searchText = ProductList.filter((p) => {
      return p.title === product
    })
    setProduct(searchText)
  }

  // product detail
  const view = (product) => {
    setDetail([{...product}])
    setClose(true)
  }
  return (
    <>
    <BrowserRouter>
      <Navbar searchBtn ={searchBtn}/>
      <Path product={product} setProduct={setProduct} detail={detail} view={view} close={close} setClose={setClose}/>
    </BrowserRouter>
    </>
  );
}

export default App;