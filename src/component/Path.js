import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Products from "./Product/Products";
import Cart from "./Cart"
import Checkout from "./Checkout";

const Path = ({product, setProduct, detail, view, close, setClose, cart, setCart, addtocart, totalPrice}) => {
    return (
        <>
            <Routes>
             <Route path="/" element={<Home/>}/>
             <Route path="/product" element={<Products product={product} setProduct={setProduct} detail={detail} view={view} close={close} setClose={setClose} addtocart={addtocart}/>}/>
             <Route path="/cart" element={<Cart totalPrice={totalPrice} cart={cart} setCart={setCart}/>}></Route>
             <Route path="/checkout" element={<Checkout totalPrice={totalPrice} cart={cart} setCart={setCart}/>}></Route>
            </Routes>
        </>
    )
}

export default Path;