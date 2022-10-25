import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import LeftSideNav from '../Courses/LeftSideNav/LeftSideNav';



const Courses = () => {
    const courses=useLoaderData()
    console.log(courses);
    
    return (
        <Container>
            <Row>
                <Col lg="4">
                    <LeftSideNav></LeftSideNav>
                </Col>

                <Col lg="8">
                   
                </Col>
            </Row>
        </Container>
    );
};

export default Courses;