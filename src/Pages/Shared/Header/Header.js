import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { SiSololearn } from "react-icons/si";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import Image from 'react-bootstrap/Image'
import Tooltip from 'react-bootstrap/Tooltip';

const Header = () => {

    const { user } = useContext(AuthContext)

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to={"/"}> <SiSololearn /> SoloLearn</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
                        <Nav.Link as={Link} to={"/courses"}>Courses</Nav.Link>
                        <Nav.Link as={Link} to={"/blog"}>Blog</Nav.Link>

                    </Nav>
                    <Nav>
                        {
                            user?.uid ?
                                <Image className='mt-2' style={{ height: '30px' }} roundedCircle src={user?.photoURL} title={user?.displayName}></Image>
                                :
                                <Nav.Link as={Link} to={"/login"}>Login</Nav.Link>

                        }

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;