import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const CourseDetail = () => {
    const courses = useLoaderData()

    const { name, description, image, published_date, total_view } = courses
    return (
        <div className='p-5'>
            <Card className='w-full  mx-auto mt-5 rounded mb-5'>
                <Card.Title className='text-center fw-bold bg-dark text-light m-0 rounded py-2 mx-2'>Welcome to {name} Course</Card.Title>
                <Card.Img style={{ height: "300px" }} className='px-2 w-full rounded' variant="top" src={image} />
                <Card.Body>

                    <Card.Text>
                        {description}
                    </Card.Text>

                </Card.Body>
            </Card>
        </div>
    );
};

export default CourseDetail;