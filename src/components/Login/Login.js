import React, { useContext, useState } from 'react';
import { initializeApp } from "firebase/app";
import firebaseConfig from '../FirebaseConfig/firebaseConfig';
import { } from 'firebase/auth';
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth, signInWithPopup } from "firebase/auth";
import login from '../../images/Group 140.png';
import './Login.css';
import { UserContext } from '../../App';



const provider = new GoogleAuthProvider();

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const app = initializeApp(firebaseConfig);
    const auth = getAuth();
    const handleSignIn = () => {
        signInWithPopup(auth, provider)
            .then(res => {
                const { displayName, email, photoURL } = res.user;
                const signedInUser = { name: displayName, email: email, photo: photoURL };
                // console.log(res);
                setLoggedInUser(signedInUser);
                console.log(loggedInUser);
            })
            .catch(err =>
                console.log(err));
    }

    const handleEmailSignIn =(e) =>{
             
               let formValid=true;
               if(e.target.name ==="email"){
                    formValid = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(e.target.value);
                   console.log(formValid);
               }
               console.log(formValid);
               if(e.target.name === "password"){
                //   const lengthValid = e.target.value.length()>6;
                 // const formValid = /^([0-9]+).([a-zA-Z]+).({3,30})$/.test(e.target.value);
                 const passLetter = (/[a-zA-Z]/).test(e.target.value);
                 const passnum= (/[0-9]/).test(e.target.value);
                 formValid = passLetter && passnum;
            }
            
          if(formValid){
            const newUser ={...loggedInUser};
            newUser[e.target.name] = e.target.value;
            console.log(newUser);
            setLoggedInUser(newUser);
          }
        //   if(formValid==false){
        //     alert('Wrong Email or Password');
        //   }
          
    }
         console.log(loggedInUser);
         const handleSubmit =(e)=>{
            if(loggedInUser.name && loggedInUser.password && loggedInUser.email){
                console.log("submitted");
            }
            e.preventDefault();//reload hobe na
         }
    return (
        <div className='row'>
            <div className='col-md-6'>

             <div className='p-5 form'>
             <form onSubmit={handleSubmit}>
                    <div  className='form-group'>
                    <h4 className='text-center text-green'>Login</h4>
                    <label>Enter your name:</label>
                    <input
                            type="text"
                            name="name"
                            className="form-control"
                            onBlur={handleEmailSignIn}
                            required
                        />
                    <label>Enter your e-mail:</label>
                        <input
                            type="text"
                            name="email"
                            className="form-control"
                            onBlur={handleEmailSignIn}
                            required
                        />
                
                    <label>Enter your password</label>
                        <input type="password" className="form-control" name='password'  onBlur={handleEmailSignIn} required></input>
                        
                    </div>
                    <button type='submit' onClick={handleSubmit} className='btn btn-primary mt-3'>Login</button>
                </form>
                
                <button onClick={handleSignIn}  className='btn btn-primary p-3 m-3'>Sign in with Google</button>
             </div>

            </div>
            <div className='col-md-6 d-flex justify-content-end'>
                <img src={login} alt='' className='img-fluid log-img '></img>
            </div>
        </div>
    );
};

export default Login;