import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { FaGithub, FaGoogle } from "react-icons/fa";

const Register = () => {
    const { createUser, updateUserProfile, googleAndGithubSignIn } = useContext(AuthContext)
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
            .then(result => {
                const user = result.user
                console.log(user);
                form.reset();
                handleUpdateProfile(name, photoURL)
                toast.success("Registration successfull")
            })
            .catch(error => toast.error(error.message))
    }

    const handleUpdateProfile = (name, photoURL) => {
        updateUserProfile(name, photoURL)
            .then(() => { })
            .catch(error => console.error(error.message))
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
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Your Name</Form.Label>
                <Form.Control type="text" name='name' placeholder="Enter name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name='email' placeholder="Enter email" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPhotoURL">
                <Form.Label>Photo Url</Form.Label>
                <Form.Control type="text" name='photoURL' placeholder="Enter Photo Url" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name='password' placeholder="Password" required />
            </Form.Group>

            <Button variant="primary" type="submit">
                Register
            </Button>
            <Button onClick={handleGoogleSignIn} className='ms-3' variant="outline-primary"><FaGoogle></FaGoogle> Google SignIn</Button>
            <Button onClick={handleGithubSignIn} className='ms-3' variant="outline-primary"><FaGithub></FaGithub> Github SignIn</Button>
            <br /> <br />

            <Link className='ms-3 ' to="/login">Already have an account? Please login</Link>
        </Form>
    );
};

export default Register;