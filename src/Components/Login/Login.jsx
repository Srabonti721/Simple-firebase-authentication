import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../../Layouts/firebase.init';


const Login = () => {
    const [user, setUser] = useState(null)
    const provider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();
    const handleSignIN = () => {
        console.log("sign in successful");
        signInWithPopup(auth, provider)
            .then(result => {
                console.log(result.user);
                setUser(result.user)
            })
            .catch(error => {
                console.log(error);

            })
    }

    const handleSignInWithGithub = () =>{
        signInWithPopup(auth,gitHubProvider)
        .then((result)=>{
            const loggedInUser = result.user
            console.log(loggedInUser);   
            if(!loggedInUser.email && loggedInUser?.providerData ?.length){
                console.log("user email is not directly provided");
                if(loggedInUser.providerData[0].email){
                    loggedInUser.email = loggedInUser.providerData[0].email;
                   setUser(loggedInUser)  
                }
            }
             
        })
        .catch((error)=>{
            console.log(error);
            
        })
    }

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                console.log('logout successful');
                  setUser(null)
            })
            .catch((error) => {
                console.log(error);

            })
    }
    return (
        <div>
            <h1>please login</h1>
            {
                user? 
                <button onClick={handleSignOut}>Sign Out</button>:
                <>
                <button onClick={handleSignIN}>Sign in With Google</button>
                 <button onClick={handleSignInWithGithub}>Sign In with github</button>
               </>
            }
            {                                                                                                                                
                user && <div>
                    <h2>user name : {user.displayName}</h2>
                    <p> email :{user.email}</p>
                    <img src={user.photoURL} alt="" />
                </div>
            }


        </div>
    );
};

export default Login;