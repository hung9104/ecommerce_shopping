import React, { useState } from "react";
import '../../src/index.css';
import {BsBagCheck} from 'react-icons/bs';
import {AiOutlineUser} from 'react-icons/ai';
import {CiLogout} from 'react-icons/ci';
import {CiLogin} from 'react-icons/ci';
import LogoShopping from '../assets/img/LogoShopping/LogoShopping.jpg';
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

function Navbar({searchBtn}) {
    const [search, setSearch] = useState()
    const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
   
    return (
        <>
            <div className="header">
                <div className=" container">
                    <div className="">
                        <img className="logo" src={LogoShopping} alt="Logo"/>
                        <h5>Shopping Online</h5>
                    </div>

                    <div className="search_box">
                        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search Product"></input>
                        <Link to='/product'><button type="button" onClick={() => searchBtn(search)}>Search</button></Link>
                    </div>

                    <div className="icon">
                        {
                            isAuthenticated &&
                            (
                                <div className="account">
                                    <div className="user_icon">
                                        <AiOutlineUser/>
                                    </div>
                                    <p className="">Hello, {user.name}</p>
                                </div>
                            )
                            
                        }
                        
                        <div className="bag_icon">
                            <Link to="/cart" className="link">
                                <BsBagCheck />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="header_menu">
                <div className="container">
                    <div className="nav">
                        <ul>
                            <li>
                                <Link to='/' className="link">Home</Link>
                            </li>
                            <li>
                                <Link to='/product' className="link">Product</Link>
                            </li>
                            <li>
                                <Link to='/about' className="link">About</Link>
                            </li>
                            <li>
                                <Link to='/contact' className="link">Contact</Link>
                            </li>
                            <li>
                                <Link to='/checkout' className="link">Checkout</Link>
                            </li>
                        </ul>   
                    </div>

                    <div className="auth">
                        {
                            isAuthenticated ?
                            <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} className="auth_button"><CiLogout/></button>
                            :
                            <button onClick={() => loginWithRedirect()} className="auth_button"><CiLogin/></button>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;