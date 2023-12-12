import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Products from "./Product/Products";
import Cart from "./Cart"
import Checkout from "./Checkout";
import Contact from "./Contact";
import About from "./About";

const Path = ({product, setProduct, detail, view, close, setClose, cart, setCart, addtocart, totalPrice, setProductList, productList}) => {
    return (
        <>
            <Routes>
             <Route path="/" element={<Home productList={productList} setProductList={setProductList}/>}/>
             <Route path="/product" element={<Products productList={productList} setProductList={setProductList} product={product} setProduct={setProduct} detail={detail} view={view} close={close} setClose={setClose} addtocart={addtocart}/>}/>
             <Route path="/cart" element={<Cart totalPrice={totalPrice} cart={cart} setCart={setCart}/>}></Route>
             <Route path="/checkout" element={<Checkout totalPrice={totalPrice} cart={cart} setCart={setCart}/>}></Route>
             <Route path="/contact" element={<Contact/>}></Route>
             <Route path="/about" element={<About/>}></Route>
            </Routes>
        </>
    )
}

export default Path;