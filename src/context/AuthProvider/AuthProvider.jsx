import React, { useEffect, useState } from 'react';
import { AuthContext } from '../AuthContext/AuthContext';
import { auth } from '../../Firebase/Firebase.init';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { GoogleAuthProvider } from 'firebase/auth';
import { GithubAuthProvider } from 'firebase/auth';


const resetPassword = (email) =>{
    return sendPasswordResetEmail(auth, email);
}
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser =(email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    //get current user authInfo
   /*  onAuthStateChanged(auth, (currentUser) =>{
        if(currentUser){
            console.log('inside observer: if', currentUser);
        }
        else{
            console.log('inside observer: else', currentUser);
        }
    }) */

    /* useEffect(() =>{
        //step 1: observer set 
        //step 2: set in a variable
        //step 3: return ans call the variable so that you can clear the reference

    },[]) */

    //signInWithGoogle
    const signInWithGoogle = () =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    //signInWithGithub
    const signInWithGithub = () =>{
        setLoading(true);
        return signInWithPopup(auth,githubProvider);
    }
   

    const signOutUser = () =>{
        return signOut(auth);
    }

    useEffect(() =>{
        const unsubscribe =  onAuthStateChanged(auth, (currentUser) =>{
            console.log('current user in auth state change', currentUser);
            setUser(currentUser);
            setLoading(false);
        })
        // clear the observer on unmount
        return () =>{
            unsubscribe();
        }
    },[])

    const authInfo = {
        user,
        loading,
        resetPassword,
        createUser,
        signInUser,
        signInWithGoogle,
        signInWithGithub,
        signOutUser,

    }
    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;