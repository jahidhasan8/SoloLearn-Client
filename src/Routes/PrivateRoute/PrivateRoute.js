import React, { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const PrivateRoute = ({children}) => {

    const {user,loading}=useContext(AuthContext)
    const location=useLocation();
    
//    private route 

    if(loading){
        return <Spinner animation="border" variant="info" />

      }
    if(user){
        return children
    }

    return <Navigate to='/login' state={{from:location}} replace></Navigate>
};

export default PrivateRoute;