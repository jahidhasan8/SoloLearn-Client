import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FaDownload } from "react-icons/fa";
import Pdf from "react-to-pdf";
import { FaEye } from "react-icons/fa";

const ref = React.createRef();

const CourseDetail = () => {
    const courses = useLoaderData()

    const { name, id, description, image, price, total_view } = courses


    return (
        <div className='p-5 '>
            <Card className='  mx-auto mt-5 rounded mb-5 col-md-6 shadow'>

                <Card.Title className='text-center fw-bold bg-dark text-light m-0 rounded py-2 mx-2'>Welcome to {name} Course  <Pdf targetRef={ref} filename="p-Course.pdf">
                    {({ toPdf }) => <button onClick={toPdf}><FaDownload></FaDownload></button>}
                </Pdf>
                </Card.Title>

                <div  ref={ref}>
                    <Card.Img  className='px-5 center-block mt-2 w-100  rounded' variant="top" src={image} />
                    <Card.Body>

                        <Card.Text className='mt-4 px-3 text-justify' >
                            {description}
                        </Card.Text>

                    </Card.Body>
                </div>
               <div className='d-flex justify-content-between px-4'>
                <p className='fw-bold'> Price: {price}$</p>
               <Button className='px-2 fw-bold mb-2 ' variant="outline-info"><Link className='text-decoration-none text-dark' to={`/checkout/${id}`}>Get Premium Access</Link></Button>
                <div className='d-flex'>
                <FaEye className='mt-2'></FaEye>
                <p className='mt-1 px-2 fw-bold'>{total_view}</p>
                </div>
               </div>

            </Card>

        </div>
    );
};

export default CourseDetail;