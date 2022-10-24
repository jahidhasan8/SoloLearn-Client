import React from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';


const Login = () => {
    const{signIn}=useContext(AuthContext);

    const handleSubmit=(e)=>{
        e.preventDefault()
        const form=e.target; 
        const email=form.email.value; 
        const password=form.password.value;
        
    }
    return (
        <Form onSubmit={handleSubmit} className=" w-50 mt-5 shadow p-3 rounded mx-auto">
       
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name='email' placeholder="Enter email" />
        </Form.Group>
       
        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name='password' placeholder="Password" />
        </Form.Group>
       
        <Button variant="primary" type="submit">
            Login
        </Button>
    </Form>
    );
};

export default Login;