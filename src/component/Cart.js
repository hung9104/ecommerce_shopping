import { React } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { v4 as uuid } from "uuid";

const Cart = ({ cart, setCart, totalPrice }) => {

  const schema = yup.object({
    fullname: yup.string().required(),
    address: yup.string().required(),
    email: yup.string().required(),
    mobile: yup.string().required(),
  })

  const { register, handleSubmit, reset, formState: {errors} } = useForm({
    resolver: yupResolver(schema)
  })

  const incqty = (product) => {
    const quantity = cart.find((p) => {
      return p.id === product.id;
    });
    setCart(
      cart.map((cartItem) => {
        return cartItem.id === product.id
          ? { ...quantity, qty: quantity.qty + 1 }
          : cartItem;
      })
    );
  };

  const decqty = (product) => {
    const quantity = cart.find((p) => p.id === product.id);

    if (!quantity || quantity.qty === 1) {
      return;
    }

    setCart(
      cart.map((cartItem) => {
        return cartItem.id === product.id
          ? { ...quantity, qty: quantity.qty - 1 }
          : cartItem;
      })
    );
  };

  const removeProduct = (product) => {
    const exist = cart.find((p) => {
      return p.id === product.id;
    });
    if (exist.qty > 0) {
      setCart(
        cart.filter((p) => {
          return p.id !== product.id;
        })
      );
    }
  };

  const handleCheckoutCart = (data) => {
    const order = {
      orderId: uuid(),
      orderInfo: [
        ...cart
      ],
      customerInfo: {
        data
      }
    }
    console.log(order);
  }

  return (
    <>
      <div className="cart_container">
        {cart.length === 0 && (
          <div className="empty_cart">
            <h2 className="empty">Cart Is Empty</h2>
            <Link to="/product" className="empty_cart_btn">
              Choose Your Products
            </Link>
          </div>
        )}
        <div className="d-flex">
          <div className="contant col-md-9">
            {cart.map((product) => {
              return (
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
                          <button
                            className="dec_qty"
                            onClick={() => decqty(product)}
                          >
                            -
                          </button>
                          <input type="text" value={product.qty}></input>
                          <button
                            className="inc_qty"
                            onClick={() => incqty(product)}
                          >
                            +
                          </button>
                        </div>
                        <h4 className="total">
                          Total: ${product.price * product.qty}
                        </h4>
                      </div>
                      <div className="close">
                        <button onClick={() => removeProduct(product)}>
                          <AiOutlineClose />
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
          <div className="col-md-3 information">
            {cart.length !== 0 && (
              <div className="user_info">
                <form onSubmit={handleSubmit(handleCheckoutCart)} className="form-control">
                  <h4>User Information</h4>
                  <div className="form-group mb-3">
                    <label className="form-label">Fullname</label>
                    <input type="text" className={`form-control ${errors?.fullname?.message ? 'is-invalid' : ''}`} placeholder="Fullname" 
                      {...register('fullname')}
                    />
                    <span className="invalid-feedback">{errors?.fullname?.message}</span>
                  </div>

                  <div className="form-group mb-3">
                    <label className="form-label">Mobile</label>
                    <input type="text" className={`form-control ${errors?.mobile?.message ? 'is-invalid' : ''}`} placeholder="Mobile"
                      {...register('mobile')}
                    />
                    <span className="invalid-feedback">{errors?.mobile?.message}</span>
                  </div>

                  <div className="form-group mb-3">
                    <label className="form-label">Email</label>
                    <input type="text" className={`form-control ${errors?.email?.message ? 'is-invalid' : ''}`} placeholder="Email"
                      {...register('email')}
                    />
                    <span className="invalid-feedback">{errors?.email?.message}</span>
                  </div>

                  <div className="form-group mb-3">
                    <label className="form-label">Address</label>
                    <input type="text" className={`form-control ${errors?.address?.message ? 'is-invalid' : ''}`} placeholder="Address"
                      {...register('address')}
                    />
                    <span className="invalid-feedback">{errors?.address?.message}</span>
                  </div>
                  <h2 className="total_price"> Total: ${totalPrice}</h2>

                  <div>
                    <button type="submit" className="checkout">Checkout</button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;