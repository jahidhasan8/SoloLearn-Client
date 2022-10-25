import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const LeftSideNav = () => {
    const[courses, setCourses]=useState([])
    useEffect(() => {
        fetch('http://localhost:5000/courses/')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, [])
    return (
        <div className='mt-4'>
            <h3>All Courses are :</h3>
             {
                    courses.map(course => <p key={course.id}
                      
                    >
                        <Link>{course.name}</Link>
                        {/* to={`/category/${category.id}`} */}
                    </p>)
                }
        </div>
    );
};

export default LeftSideNav;