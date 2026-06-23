import React from 'react';
import { auth } from '../../Layouts/firebase.init';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const Login = () => {
    const provider = new GoogleAuthProvider();
    const handleLogin = () =>{
        console.log("login successful");
        signInWithPopup(auth, provider)
        .then(result=>{
            console.log(result);
            
        })
        .catch(error=>{
            console.log(error);
            
        })
    }
    return (
        <div>
            <h1>please login</h1>
            <button onClick={handleLogin}>login</button>
        </div>
    );
};

export default Login;