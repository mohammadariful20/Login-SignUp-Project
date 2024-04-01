import { createContext, useEffect, useState } from "react"
import PropTypes from 'prop-types';
import auth from "../../Firebase/firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const AuthContext=createContext(null)

export default function AuthProvider({children}) {
  const [user,setUser]=useState(null)
//create new user
  const createUser=(email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password)
  }
  //sign in user
  const signin = (email,password) => {
    return signInWithEmailAndPassword(auth,email,password)
  }
  //sign out user
  const signOutuser=()=>{
    return signOut(auth)
  }
  
//on auth state change
useEffect(()=>{
  const unSubscribe=onAuthStateChanged(auth,currentUser=>{
    setUser(currentUser)
    console.log('--------------->',currentUser)
  })
  return ()=>unSubscribe();
},[])
  
  const authInfo={createUser,user,setUser,signin ,signOutuser}
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  )
}

AuthProvider.propTypes ={
  children:PropTypes.node
}