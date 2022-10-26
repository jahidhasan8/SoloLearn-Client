import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FaDownload } from "react-icons/fa";
import Pdf from "react-to-pdf";


const ref = React.createRef();

const CourseDetail = () => {
    const courses = useLoaderData()

    const { name, id, description, image, published_date, total_view } = courses

    
    return (
        <div className='p-5'>
            <Card className='  mx-auto mt-5 rounded mb-5 col-md-6 shadow'>

                <Card.Title className='text-center fw-bold bg-dark text-light m-0 rounded py-2 mx-2'>Welcome to {name} Course  <Pdf targetRef={ref} filename="p-Course.pdf">
                    {({ toPdf }) => <button onClick={toPdf}><FaDownload></FaDownload></button>}
                </Pdf>
                    </Card.Title>

                <Card.Img style={{ height: "300px" }} className='px-2 w-full rounded' variant="top" src={image} />
                <Card.Body>

                    <Card.Text className='mt-4 px-3 ' ref={ref} >
                       {description}
                    </Card.Text>

                </Card.Body>
                <Button className='px-0 fw-bold' variant="outline-dark"><Link to={`/checkout/${id}`}>Get Premium Access</Link></Button>

            </Card>

        </div>
    );
};

export default CourseDetail;