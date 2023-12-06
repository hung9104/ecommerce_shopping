import React from "react";
import { FaShoppingBag } from "react-icons/fa";
import { Link } from "react-router-dom";
import best_product from '../assets/img/Best_Product/best_product.jpg'
import best_product2 from '../assets/img/Best_Product/best_product2.jpg'
import best_product3 from '../assets/img/Best_Product/best_product3.jpg'

function Home() {
    return (
        <>
            <div className="banner">
                <div className="container">
                    <div className="detail">
                        <h2>The Best Products 2023</h2>
                        <Link to='/product' className="link"><FaShoppingBag/>Shop Now</Link>
                    </div>

                    <div className="img_box">
                        <div>
                            <img style={{width:'80%'}} className="banner_img" src={best_product2} alt="logo"/>
                        </div>
                        <div>
                            <img className="banner_img" src={best_product3} alt="logo"/>
                        </div>
                        <div>
                            <img style={{ width:'80%'}} className="banner_img" src={best_product} alt="logo"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;