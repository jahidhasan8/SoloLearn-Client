import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
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
     
    // updating profile
   const updateUserProfile=(name,photoURL)=>{
    return updateProfile(auth.currentUser,{
        displayName: name, photoURL: photoURL
    })
   }
    
    //  sigin by google and github
    const googleAndGithubSignIn=(googleProvider)=>{
       return signInWithPopup(auth, googleProvider)

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
        updateUserProfile,
        googleAndGithubSignIn

    }
    return (
        <AuthContext.Provider value={ authInfo }>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;