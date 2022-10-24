import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";


export const AuthContext = createContext()
const auth = getAuth();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading,setLoading]=useState(true)
    // create user ,allows new users to register 
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
     
    // signin existing user
    const signIn=(email,password)=>{
       return signInWithEmailAndPassword(auth, email, password)
    }
     
    // state observer and getting user data
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
        })
        return ()=>unsubscribe()
    },[])
    const authInfo = {
        user,
        createUser,
        signIn

    }
    return (
        <AuthContext.Provider value={ authInfo }>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;