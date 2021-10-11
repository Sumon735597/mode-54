import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="login-form">
            <div className="login-box">
                <h2>Register : Create Account</h2>
                <form onSubmit="">
                    <input type="email" name="" id="" placeholder="Enter your email" />
                    <br />
                    <input type="password" name="" id="" placeholder="Enter your Password" />
                    <br />
                    <input type="password" name="" id="" placeholder="Re-enter Password" />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>Already Have an account? <Link to="/login"> Login</Link></p>
                <br />
                <div>.............or..............</div>
                <button className="btn-regular">google Sign In</button>
            </div>
        </div>
    );
};

export default Register;