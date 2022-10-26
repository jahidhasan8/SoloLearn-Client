import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { SiSololearn } from "react-icons/si";
import { FaUserAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import Image from 'react-bootstrap/Image'
import { Button } from 'react-bootstrap';
import { useState } from 'react';



const Header = () => {

    const { user,logOut } = useContext(AuthContext)
    const[toggle,setToggle]=useState('dark')

    const handleToggle=()=>{
        if(toggle==='dark'){
            setToggle('light')
        }
        else {
            setToggle('dark')
        }
    }

    const handleLogout=()=>{
        logOut()
        .then(()=>{})
        .catch(error=>console.error(error.message))
    }

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
                        <Nav.Link as={Link} to={"/faq"}>FAQ</Nav.Link>

                    </Nav>
                    <Nav>
                        {
                            user?.uid ?
                                <>
                                    <Nav.Link className='me-2' onClick={handleLogout}>Logout</Nav.Link>
                                
                                   {user?.photoURL ?
                                   <Image className='mt-2' style={{ height: '30px' }} roundedCircle src={user?.photoURL} title={user?.displayName}></Image>
                                   :
                                   <FaUserAlt className='text-light mt-3' title={user?.displayName}></FaUserAlt>
                                    } 
                                   
                                </>
                                :
                                <Nav.Link as={Link} to={"/login"}>Login</Nav.Link>

                        }
                        
                         {/* toggle button */}
                        <Button onClick={handleToggle} className='ms-3' variant="outline-info">{toggle} </Button>
                        
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;