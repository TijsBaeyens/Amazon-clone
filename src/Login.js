import React, { useState } from 'react';
import './Login.css'
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const signIn = (e) => {
        e.preventDefault();
        auth
            .signInWithEmailAndPassword(email, password)
            .then((auth) => {
                if(auth) {
                navigate('/', { replace: true });
                }
            })
            .catch(error => alert(error.message))
    }
    const register = (e) => {
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                // it successfully created a new user with email and password
                if (auth) {
                    navigate('/', { replace: true });
                }
            })
            .catch(error => alert(error.message))
    }
  return (
    <div className='login'>
        <Link to="/">
        <img src="https://www.nettl.com/nl/wp-content/uploads/2019/06/amazon-logo-300x200.jpg" alt="" className="login__logo" />
        </Link>
        <div className='login__container'>
            <h1>Sign-in</h1>
            <form>
                <h5>E-mail</h5>
                <input type='text' value={email} onChange={e => setEmail(e.target.value)}/>
                <h5>Password</h5>
                <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>
                <button onClick={e => signIn(e)} type='submit' className='login__signInButton'>Sign In</button>
            </form>
            <p>
                By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
            </p>
            <button type='submit' onClick={e => register()} className='login__registerButton'>Create your Amazon Account</button>
        </div>
    </div>
  )
}
export default Login