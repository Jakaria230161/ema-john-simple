import React from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';

const SignUp = () => {
    return (
        <div className='form-container'>
            <h1 className='form-title'>Sign Up</h1>
            <form>
                <div className='form-control'>
                    <label htmlFor='email'>Email</label>
                    <input type="email" name="name" id="" placeholder='Enter your Email' required></input>
                </div>
                <div className='form-control'>
                    <label htmlFor='email'>Password</label>
                    <input type="password" name="password" id="" placeholder='Enter your Password' required></input>
                </div>
                <div className='form-control'>
                    <label htmlFor='confirm'>Confirm Password</label>
                    <input type="password" name="confirm" id="" placeholder='Enter your confirm Password' required></input>
                </div>
                <input className='btn-submit' type="submit" value="Sign Up"></input>
            </form>
            <p>Already have an account?<Link to="/login">Login</Link></p>
        </div>
    );
};

export default SignUp;