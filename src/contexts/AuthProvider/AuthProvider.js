import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import app from '../../firebase/firebase.config'

export const AuthContext = createContext()
const auth = getAuth(app);

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
     
   const updateUserProfile=(name,photoURL)=>{
    return updateProfile(auth.currentUser,{
        displayName: name, photoURL: photoURL
    })
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
        signIn,
        updateUserProfile

    }
    return (
        <AuthContext.Provider value={ authInfo }>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;