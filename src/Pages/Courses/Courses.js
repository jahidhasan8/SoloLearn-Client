import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import LeftSideNav from '../Courses/LeftSideNav/LeftSideNav';



const Courses = () => {
    const courses = useLoaderData()

    return (
        <Container className='mb-5'>
            <Row>
                <Col lg="4" className='mt-5'>
                    <LeftSideNav></LeftSideNav>
                </Col>

                <Col lg="8">
                    <div className="row row-cols-1 rounded row-cols-md-2 g-4 mt-5">
                        {
                            courses.map(course => <div key={course.id} >
                                <div className="col">
                                    <div className="card h-50 w-full shadow rounded">
                                        <div ><img style={{ height: "300px" }}  src={course.image} className="card-img-top rounded  p-2" alt="..." /></div>
                                        <div className="card-body">
                                            <h5 className="card-title fw-bold">{course.name}</h5>
                                            <p className="card-text">

                                                {course?.description.slice(0, 120) + '...'}
                                            </p>
                                        </div>
                                        <Link to={`/courseDetails/${course.id}`} className="btn btn-dark ">Course Details</Link>
                                    </div>
                                </div>

                            </div>
                            
                            )
                        }
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Courses;