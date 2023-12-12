import React from "react";
import { Link } from "react-router-dom";
import {HiOutlineMail, HiOutlinePhone} from "react-icons/hi"
import { MdLocationCity } from "react-icons/md";
import { FaRegClock } from "react-icons/fa6";


const About = () => {
  return (
    <>
      <div className="about_infomation container d-flex">
        <div className="info col-md-6">
          <div className="blog">
            <h2>About Us</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut
              odio eget sapien condimentum laoreet sit amet eget turpis. Morbi
              suscipit at velit et porttitor. Vivamus in tempus enim. Nunc at
              pulvinar felis. Proin cursus turpis sit amet facilisis
              sollicitudin. Cras dapibus mi et risus fringilla imperdiet. Nulla
              vulputate lacus quis mi sodales, vitae interdum quam porta.
            </p>
            <Link to="/product">
              <button>Continue Shopping</button>
            </Link>
          </div>
        </div>

        <div className="about_contact">
          <div className="info">
            <div className="blog_contact">
              <h2>Info</h2>
              <p><HiOutlineMail/> shopping@mail.com</p>
              <p><HiOutlinePhone/> +84 12345678</p>
              <p><MdLocationCity /> 72 Nguyen Trai St.</p>
              <p><FaRegClock/> 08:00 - 22:00</p>
              <Link to="/contact">
                <button>Contact</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
