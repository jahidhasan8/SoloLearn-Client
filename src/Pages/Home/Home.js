import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import CourseBanner from './component/CourseBanner';
import Partner from './component/Partner';
import Stats from './component/Stats';

const Home = () => {
    return (
        <div className='w-full p-1'>
            <h2 className='fw-bold text-center'>Welcome to SoloLearn family</h2>
            <p className='text-center fw-semibold'>Here you can grow your skills on programming languages <br />We are proving some programming language courses</p>
            
            <Carousel className='mt-2 mb-5 w-100 px-4'>
                <Carousel.Item className=''>
                    <img style={{ height: "500px" }}
                        className="d-block w-100 rounded"
                        src="https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg?size=626&ext=jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                       
                        <p className='fw-bold'>"Programming isn't about what you know; <br /> it's about what you can figure out.” - Chris Pine</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{ height: "500px" }}
                        className="d-block w-100 rounded"
                        src="https://img.freepik.com/free-photo/professional-programmer-working-late-dark-office_1098-18705.jpg?size=626&ext=jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                       
                        <p className='fw-bold'>“Programs must be written for people to read, and <br /> only incidentally for machines to execute.”
                            ― Harold Abelson, </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{ height: "500px" }}
                        className="d-block w-100 rounded"
                        src="https://contentstatic.techgig.com/photo/msid-81637605,width-400,resizemode-4/Pros-and-cons-of-PHP-programming-language-that-every-developer-must-know.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>PHP</h3>
                        <p className='fw-bold'>
                            PHP is a server side scripting language. that is used to develop Static <br /> websites or Dynamic websites or Web applications.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <Stats></Stats>
            <CourseBanner></CourseBanner>
            <Partner></Partner>
        </div>
    );
};

export default Home;