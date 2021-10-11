import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

import './Login.css'

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/';


    const handleGoogleLogIn = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_url)
            })
    }
    return (
        <div className="login-form">
            <div className="login-box">
                <h2>Login</h2>
                <form>
                    <input type="email" name="" id="" placeholder="Enter your email" />

                    <br />
                    <input type="password" name="" id="" placeholder="Enter Your Password" />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>New to Ema-Jhon <Link to="/register">Create Account</Link></p>

                <div>.............or..............</div>
                <button onClick={handleGoogleLogIn} className="btn-regular">google Sign In</button>
            </div>
        </div>
    );
};

export default Login;