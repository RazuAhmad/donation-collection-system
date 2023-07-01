import React, { createContext, useEffect, useState } from 'react'

import {  createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut,GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from '../firebase/firebase.config';


export const AuthContext =createContext();


function UserContext({children}) {

const [user,setUser]=useState({});
const [loading,setLoading]=useState(true);

const googleProvider = new GoogleAuthProvider();

// create user(sign up/register) function:::
const createUser=(email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password)
}

// sign in function:::
const signInUser=(email,password)=>{
    return signInWithEmailAndPassword(auth, email, password)
}

// get the current logged in user:::
useEffect(()=>{
   const unsubscribe= onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser);
        setLoading(false)
    })
    return ()=>{
        unsubscribe()
    }       
},[])

// Sign in with google::
const signInWithGoogle =()=>{
    return signInWithPopup(auth, googleProvider)
    
}

// user log out::::
const userLogOut=()=>{
   return signOut(auth)
}

const authInfo ={user,setLoading,loading,setUser,createUser,signInUser,userLogOut,signInWithGoogle}

  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default UserContext