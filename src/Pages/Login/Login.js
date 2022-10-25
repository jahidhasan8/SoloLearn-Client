import React from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';


const Login = () => {
    const{signIn}=useContext(AuthContext);

    const handleSubmit=(e)=>{
        e.preventDefault()
        const form=e.target; 
        const email=form.email.value; 
        const password=form.password.value;
        
        signIn(email,password)
        .then(result=>{
            const user=result.user 
            console.log(user);
            form.reset()
        })
        .catch(error=>toast.error(error.message))
    }

   
    return (
        <Form onSubmit={handleSubmit} className=" w-50 mt-5 shadow p-3 rounded mx-auto">
       
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name='email' placeholder="Enter email" required/>
        </Form.Group>
       
        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name='password' placeholder="Password" required/>
        </Form.Group>
       
        <Button variant="primary" type="submit">
            Login
        </Button>
        <Link className='ms-3' to="/register">Don't have an account? Please Register</Link>
    </Form>
    );
};

export default Login;