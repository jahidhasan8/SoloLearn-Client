import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const LeftSideNav = () => {
    const [courses, setCourses] = useState([])

    // load api data through useEffect hook
    useEffect(() => {
        fetch('https://assignment10-server-kohl.vercel.app/courses/')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, [])
    return (
        <div className='mt-4 shadow px-4 border rounded  py-2'>
            <h3 className='text-center'>All Courses are </h3>
            {
                courses.map(course => <p key={course.id}

                >
                    <Link className='fw-bold text-decoration-none' to={`/courseDetails/${course.id}`}>{course.name}</Link>
                
                </p>)
            }
        </div>
    );
};

export default LeftSideNav;