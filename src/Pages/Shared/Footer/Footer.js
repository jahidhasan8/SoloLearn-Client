import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="mt-5 px-1">
      <div className="footer-container ">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="left-container text-center">
                <img src="https://i.ibb.co/Qn5T4wq/unnamed.jpg" alt="" width="100" height="100" />
                <h1>SoloLearn</h1>

                <p className="mt-4 ">
                  <small>
                    We are providing programming language courses.
                  </small>
                </p>
              </div>
            </div>

            <div className="col-md-6">
              <div className="footer-container">
                <h3>Sign up for the newsletter</h3>
                <input
                  className="footer-input text-center"
                  type="text"
                  placeholder="Enter Your Email"
                />
                <button className="btn btn-primary">Subscribe</button>
                <div className="phone d-flex align-items-center justify-content-center mt-4">
                  <div>
                    <h5>+88 01929-500000</h5>
                  </div>
                </div>
                <div className=" d-flex align-items-center justify-content-center">
                  <div>
                    <p>143 Mirpur,Dhaka Bangladesh.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="p-2 text-center">
            <small>
              &copy;SoloLearn . All rights
              reserved, Jahid-2025
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;