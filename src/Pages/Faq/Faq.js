import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const Faq = () => {
    return (

        <Accordion className='m-5' defaultActiveKey={['1']} alwaysOpen>
            <Accordion.Item eventKey="1">
                <Accordion.Header>When we get updated course material?</Accordion.Header>
                <Accordion.Body>
                    We are working through it.Our team working to update all course.We are making new course material also working on existing course. We will update soon in our site.Keep learning...
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>Can i download course?</Accordion.Header>
                <Accordion.Body>
                    Yes,you can download our course.When you explore our course details, On course details,if you click on premium access you will redirect to checkout page.From checkout page you will get download option.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
                <Accordion.Header>Can we get non-cse courses?</Accordion.Header>
                <Accordion.Body>
                    Sorry, right now we are working with programming language courses.In future if we include any non-cse courses we will update on our site.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
                <Accordion.Header>Does this site supported on mobile device?</Accordion.Header>
                <Accordion.Body>
                    Yes,This site supported on mobile device.You can use this site on larger device also on mobile device.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5">
                <Accordion.Header>Can i read courses without register?</Accordion.Header>
                <Accordion.Body>
                    Yes,you can read our courses without register.But you can't download courses, if you haven't register on our site.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="6">
                <Accordion.Header>What are the technology requirements?</Accordion.Header>
                <Accordion.Body>
                   If you have a computer with internet connection, can join our courses.
                </Accordion.Body>
            </Accordion.Item>
            
            <Accordion.Item eventKey="7">
                <Accordion.Header>Why should I use online learning?</Accordion.Header>
                <Accordion.Body>
                Among the many benefits of online learning, you'll find that virtual education allows you to enjoy a more flexible schedule, can reduce the cost of your degree, and can allow you to more easily develop your career alongside furthering your education.You can get huge resources about same topics.online courses give students full control over their own learning, students are able to work at their own speed. Generally students work faster than they would do otherwise and take in more information. They are able to move faster through areas of the course they feel comfortable with, but slower through those that they need a little more time on.
                </Accordion.Body>
            </Accordion.Item>
            
        </Accordion>

    );
};

export default Faq;