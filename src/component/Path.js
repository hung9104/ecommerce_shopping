import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Products from "./Product/Products";
import Cart from "./Cart"

const Path = ({product, setProduct, detail, view, close, setClose}) => {
    return (
        <>
            <Routes>
             <Route path="/" element={<Home/>}/>
             <Route path="/product" element={<Products product={product} setProduct={setProduct} detail={detail} view={view} close={close} setClose={setClose}/>}/>
             <Route path="/cart" element={<Cart/>}></Route>
            </Routes>
        </>
    )
}

export default Path;