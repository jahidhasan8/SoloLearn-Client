import React from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { FaGithub, FaGoogle } from "react-icons/fa";

const Login = () => {
    const { signIn,googleAndGithubSignIn,setLoading } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const navigate=useNavigate()
    const location=useLocation();
    const from=location.state?.from?.pathname || '/'

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user
                console.log(user);
                form.reset()
                navigate(from,{replace:true})
                toast.success("Successfully Login")
            })
            .catch(error => toast.error(error.message))
            
            .finally(()=>{
                setLoading(false);
               })
    }
   
    const handleGoogleSignIn = (e) => {
        e.preventDefault()
        googleAndGithubSignIn(googleProvider)
            .then(result => {
                const user = result.user
                console.log(user);
                toast.success("Google signIn Successfull")
            })
            .catch(error => toast.error(error.message))
    }

    const handleGithubSignIn = (e) => {
        e.preventDefault()
        googleAndGithubSignIn(githubProvider)
            .then(result => {
                const user = result.user
                console.log(user);
                toast.success("Github signIn Successfull")
            })
            .catch(error => toast.error(error.message))
    }

    return (
        <Form onSubmit={handleSubmit} className=" w-50 mt-5 shadow p-3 rounded mx-auto">

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name='email' placeholder="Enter email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name='password' placeholder="Password" required />
            </Form.Group>

            <Button variant="primary" type="submit">
                Login
            </Button>
            <Button onClick={handleGoogleSignIn} className='ms-3' variant="outline-primary"><FaGoogle></FaGoogle> Google SignIn</Button>
            <Button onClick={handleGithubSignIn} className='ms-3' variant="outline-primary"><FaGithub></FaGithub> Github SignIn</Button>
            <br /> <br />
            <Link className='ms-3' to="/register">Don't have an account? Please Register</Link>
        </Form>
    );
};

export default Login;