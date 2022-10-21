
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';
import './Login.css';

const Login = () => {
    const { signIn } = useContext(AuthContext);

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
            })
            .catch(error => console.log(error));
    }

    return (
        <div className='form-container'>
            <h1 className='form-title'>Login</h1>
            <form onSubmit={handleSubmit}>
                <div className='form-control'>
                    <label htmlFor='email'>Email</label>
                    <input type="email" name="email" id="" placeholder='Enter your Email' required></input>
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