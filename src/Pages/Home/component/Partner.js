import React from "react";
import "./Partner.css";

const Partner = () => {
  return (
    <div>
      <h2 className=" my-5 border-3 bg-dark text-white w-25 rounded text-center p-3 m-3 mx-auto">
        Accredited Partner
      </h2>

      <div className="container mt-5 text-center partner" id="Shop">
        <div className="container p-3 mt-5 mb-5 rounded shadow bg-body">
          <div className="row row-cols-1 row-cols-md-3 ">
            <div className="  mx-auto col">
              <div className="">
                
                <img src="https://i.ibb.co/Ryr4sVC/Daraz-Logo.jpg" alt="" />
              </div>
            </div>

            <div className="  mx-auto col ">
              <div className="">
       
        <img src="https://i.ibb.co/y8zYmYZ/rokomari-store-logo-coupon-exit.png" alt=""  />
              </div>
            </div>
            <div className="  mx-auto col ">
              <div className="">
                
                <img src="https://i.ibb.co/1TjC5rm/Paathshala-logo-final1.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partner;