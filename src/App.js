import './App.css';
import Navbar from './component/Navbar';
import Path from './component/Path.js';
import { BrowserRouter } from 'react-router-dom';
import ProductList from './component/Product/ProductList.js';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

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
      return p.title.toLowerCase().includes(product.toLowerCase())
    })
    console.log(searchText);
    setProduct(searchText)
  }

  //total price
  const totalPrice = cart.reduce(
    (price, item) => price + item.qty * item.price,
    0
  );

  // product detail
  const view = (product) => {
    setDetail([{...product}])
    setClose(true)
  }

  // Add to cart
  const addtocart = (product) => {
    const cartItem = cart.find((p) => {
      return p.id === product.id
    })
    if(cartItem) {
      toast.info('This Product is already added to cart', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    } else {
      setCart([...cart, {...product, qty:1}])
      toast.success('Product is added to cart', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }
  }

  return (
    <>
    <BrowserRouter>
      <Navbar searchBtn ={searchBtn}/>
      <Path totalPrice={totalPrice} product={product} setProduct={setProduct} detail={detail} view={view} close={close} setClose={setClose} cart={cart} setCart={setCart} addtocart={addtocart}/>
    </BrowserRouter>
    </>
  );
}

export default App;