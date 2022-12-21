import React from 'react';
import { AiOutlineCheckSquare } from "react-icons/ai";
import { Link } from 'react-router-dom';
const CourseBanner = () => {
    return (
        <div className='mt-5 container'>

<div className='row d-flex justify-content-center align-items-center'>

    <div className='col-md-5'>

        <img className='w-full p-2' style={{ height: '300px' }} src="https://i.ibb.co/0Cwn4Cp/photo-1541178735493-479c1a27ed24-ixlib-rb-4-0.jpg" alt="" />

    </div>

    <div className='col-md-7'>
        <h1>Get more close with your courses.</h1>
        <p className='fs-5'>We provide a wide range of courses for the different sectors you can choose from, which suits you perfectly.</p>
        <p className='fs-5'><AiOutlineCheckSquare className='fs-2 text-info'/> Detail description of each course</p>
        <p className='fs-5'><AiOutlineCheckSquare className='fs-2 text-info'/> Easy to understand language</p>
        <p className='fs-5'><AiOutlineCheckSquare className='fs-2 text-info'/> Simple and easy to learn courses</p>
        <p className='fs-5'><AiOutlineCheckSquare className='fs-2 text-info' /> Download pdf version of courses</p>
        <Link to={"/register"}> <button className='btn btn-dark text-white fw-bold'>Start Learning Now</button></Link>
       
    </div>
</div>
        </div>
    );
};

export default CourseBanner;