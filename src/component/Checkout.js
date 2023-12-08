import React from 'react';
import { Link } from 'react-router-dom';

const Checkout = ({ cart, totalPrice }) => {

  return (
    <>
      <div className='checkout_container'>
          {
            cart && cart.length === 0 &&
            <div className='empty_cart'>
              <h2>Cart is empty</h2>
              <Link to="/product" className='empty_cart_btn'>Choose your products</Link>
            </div>
          }
          <div className="contant">
                    {
                        cart && cart.map((product) => {
                            return (
                              <div className="contant col-md-9">
                                  <>
                                    <div className="cart_item" key={product.id}>
                                      <div className="img_box">
                                        <img src={product.img} alt={product.title}></img>
                                      </div>
                                      <div className="detail">
                                        <div className="info">
                                          <h4>{product.cat}</h4>
                                          <h3>{product.title}</h3>
                                          <p>Price: ${product.price}</p>
                                          <div className="qty">
                                            <p>Quantity: {product.qty}</p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </>
                            </div>
                            )
                        })
                    }
                </div>
      </div>
    </>
  );
};

export default Checkout;
