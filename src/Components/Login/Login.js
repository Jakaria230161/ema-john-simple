import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    return (
        <div className='form-container'>
            <h1 className='form-title'>Login</h1>
            <form>
                <div className='form-control'>
                    <label htmlFor='email'>Email</label>
                    <input type="email" name="name" id="" placeholder='Enter your email' required></input>
                </div>
                <div className='form-control'>
                    <label htmlFor='email'>Password</label>
                    <input type="password" name="password" id="" placeholder='Enter your Password' required></input>
                </div>
                <input className='btn-submit' type="submit" value="Login"></input>
            </form>
            <p>New to Ema john <Link to="/signup">Create a New Account</Link></p>
        </div>
    );
};

export default Login;