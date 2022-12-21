import React from 'react';

const Stats = () => {
    return (
        <section className="w-full bg-dark text-white  py-20">
        
        <div className="container mt-5  row row-cols-lg-6 d-flex justify-content-between  text-center ">
            <div className=" m-2 gx-5">
                <p className="fs-1 fw-bold m-0">2500+</p>
                <p className="fw-semibold">Happy Students</p>
            </div>
            <div className=" m-2 gx-5">
                <p className="fs-1 fw-bold m-0">4000+</p>
                <p className="fw-semibold">visitors</p>
            </div>
            <div className=" m-2 gx-5">
                <p className="fs-1 fw-bold m-0 ">100K</p>
                <p className="fw-semibold">Followers</p>
            </div>
            <div className="m-2 gx-5">
                <p className="fs-1 fw-bold m-0 ">1000+</p>
                <p className="fw-semibold">Download Courses</p>
            </div>
        </div>
    
    </section>
    );
};

export default Stats;