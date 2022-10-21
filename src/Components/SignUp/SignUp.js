import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';
import './SignUp.css';

const SignUp = () => { 
    const [error, setError] = useState(null);
    const { createUser } = useContext(AuthContext);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(email, password, confirm);

        if (password.length < 6) {
            setError('password must be at least 6 characters long');
            return;
        }

        if (password !== confirm) {
            setError('Your password did not match')
            return;
        }

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
            })
            .catch(error => console.log(error));

}
    return (
        <div className='form-container'>
            <h1 className='form-title'>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <div className='form-control'>
                    <label htmlFor='email'>Email</label>
                    <input type="email" name="email" id="" placeholder='Enter your Email' required></input>
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
            <p className='text-error'>{error}</p>
        </div>
    );
};

export default SignUp;