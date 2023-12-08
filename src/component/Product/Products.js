import {React, useEffect} from "react";
import ProductList from "./ProductList";
import { AiOutlineCloseCircle, AiOutlineShoppingCart } from "react-icons/ai";
import { BsEye } from "react-icons/bs";
import { useAuth0 } from "@auth0/auth0-react";


const Products = ({product, setProduct, detail, view, close, setClose, addtocart}) => {

    useEffect(() => {
        const fetchData = async () => {
          const response = await fetch("https://656eb5346529ec1c62368337.mockapi.io/product");
            const jsonData = await response.json();
            setProduct(jsonData);
        };
    
        fetchData();
      }, [setProduct])

    const { loginWithRedirect, isAuthenticated } = useAuth0();
    
    const filterProduct = (product) => {
        const searchCat = ProductList.filter((cat) => {
            return cat.cat === product
        })
        setProduct(searchCat)
    }

    const allProduct = () => {
        setProduct(ProductList)
    }
    return (
        <>
            {
                close ?
                <div className="product_detail">
                <div className="container">   
                        <button onClick={() => setClose(false)} className="closebtn"><AiOutlineCloseCircle/></button>             
                        {
                        detail.map((product) => {
                            return (
                                <div className="productbox">
                                    <div className="img_box">
                                        <img style={{width: '400px'}} src={product.img} alt={product.title}></img>
                                    </div>

                                    <div className="detail">
                                        <h4>{product.cat}</h4>
                                        <h2>{product.title}</h2>
                                        <p>A  Product Everyone Will Love...</p>
                                        <h3>${product.price}</h3>
                                        <button onClick={() => addtocart(product)}>Add To Cart</button>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div> : null
            }
            
           <div className="products">
                <h2>Product</h2> 
                <p>Home.Product</p>
                <div className="container">
                    <div className="filter">
                        <div className="categories">
                            <h3>Categories</h3>
                            <ul>
                                <li onClick={()=> allProduct()}>All</li>
                                <li onClick={()=> filterProduct("Playstation")}>Playstation</li>
                                <li onClick={()=> filterProduct("Laptop")}>Laptop</li>
                                <li onClick={()=> filterProduct("Camera")}>Camera</li>
                                <li onClick={()=> filterProduct("Television")}>Television</li>
                            </ul>
                        </div>
                    </div>

                    <div className="productbox">
                        <div className="contant">
                            {
                                 product.map((product) => {
                                    return (
                                        <>
                                            <div className="box" key={product.id}>
                                                <div className="img_box">
                                                    <img className="product_img" src={product.img} alt=""/>
                                                    <div className="icon">
                                                        {
                                                            isAuthenticated ?
                                                            <li onClick={() => addtocart(product)}><AiOutlineShoppingCart/></li>
                                                            : 
                                                            <li onClick={() => loginWithRedirect()}><AiOutlineShoppingCart/></li>
                                                        }
                                                        <li onClick={() => view(product)}><BsEye/></li>
                                                    </div>
                                                </div>

                                                <div className="detail">
                                                    <p>{product.cat}</p>
                                                    <h3>{product.title}</h3>
                                                    <h4>${product.price}</h4>
                                                </div>
                                            </div>
                                        </>
                                    )
                                 })
                            }
                        </div>
                    </div>
                </div>
           </div>
        </>
    )
}

export default Products;