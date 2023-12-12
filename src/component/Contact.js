import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
import { toast } from "react-toastify";

const Contact = () => {
  const schema = yup.object({
    name: yup.string().required(),
    message: yup.string().required(),
    email: yup.string().required(),
    mobile: yup.number().required(),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [userContact, setUserContact] = useState({
    name: "",
    mobile: "",
    message: "",
    email: "",
  });

  const data = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserContact({ ...userContact, [name]: value });
  };

  const contact = async (data) => {
    const userMessage = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    const res = await fetch(
      "https://6577ed76197926adf62f0b06.mockapi.io/contact",
      userMessage
    );
    reset();
    toast.success("Message sent successfully!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  return (
    <>
      <div className="contact container">
        <div className="contant">
          <div className="form">
            <h2>Contac Us</h2>
            <p>
              Feel free to contact us anytime. We will get <br /> back to you as
              soon ass we can!
            </p>
            <form onSubmit={handleSubmit(contact)}>
              <div>
                <input
                  type="text"
                  name="Name"
                  placeholder="Enter Your Name"
                  onChange={data}
                  className={`form-control ${
                    errors?.name?.message ? "is-invalid" : ""
                  }`}
                  {...register("name")}
                ></input>
                <span className="invalid-feedback">
                  {errors?.name?.message}
                </span>
              </div>
              <div>
                <input
                  type="email"
                  name="Email"
                  placeholder="Enter Your Email"
                  onChange={data}
                  className={`form-control ${
                    errors?.email?.message ? "is-invalid" : ""
                  }`}
                  {...register("email")}
                ></input>
                <span className="invalid-feedback">
                  {errors?.email?.message}
                </span>
              </div>
              <div>
                <input
                  type="text"
                  name="Mobile"
                  placeholder="Enter Your Mobile"
                  onChange={data}
                  className={`form-control ${
                    errors?.mobile?.message ? "is-invalid" : ""
                  }`}
                  {...register("mobile")}
                ></input>
                <span className="invalid-feedback">
                  {errors?.mobile?.message}
                </span>
              </div>
              <div>
                <textarea
                  name="Message"
                  placeholder="Leave Your Message Here"
                  onChange={data}
                  className={`form-control ${
                    errors?.message?.message ? "is-invalid" : ""
                  }`}
                  {...register("message")}
                ></textarea>
                <span className="invalid-feedback">
                  {errors?.message?.message}
                </span>
              </div>
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
