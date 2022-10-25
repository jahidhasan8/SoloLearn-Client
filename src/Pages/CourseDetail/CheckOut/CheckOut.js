import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheckOut = () => {
    const courses=useLoaderData()
    return (
        <div>
            <h3 className='text-center mt-5 fw-bold'>Thank you for purchasing {courses.name} programming Course</h3>
            
        </div>
    );
};

export default CheckOut;