import React, { useContext } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const Login = () => {

    const { loginUser } = useContext(AuthContext);

    const handleLogin = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        loginUser(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
        })
        .catch (error => {
            console.log(error);
        })
    }

    return (
        <div className='form-container'>
            <form onSubmit={handleLogin}>
                <h2 className='form-title'>Login</h2>
                <div className="form-control">
                    <label htmlFor="">Email</label>
                    <input className='email-form' type="email" name="email" id="" placeholder='Email' required />
                </div>
                <div className="form-control">
                    <label htmlFor="">Password</label>
                    <input className='password-form' type="password" name="password" id="" placeholder='Password' required />
                </div>
                <input className='btn-submit' type="submit" value="Login" />
                <p><small>New to Ema-jhon? <Link to="/signup">Create New Account</Link></small></p>
            </form>
        </div>
    );
};

export default Login;