import React, { useContext, useState } from 'react';
import './SignUp.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const SignUp = () => {
    const [error, setError] = useState('');
    const {createUser} = useContext(AuthContext);

    const handleSignUp = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;

        setError('')

        if(password !== confirm) {
            setError('Password do not match');
            return;
        } else if(password.length < 6) {
            setError('Password At least 6 charactor');
            return;
        }

        createUser(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            // form.reset();
        })
        .catch(error => {
            console.log(error);
            setError(error.message)
        })
    }

    return (
        <div className='form-container'>
            <form onSubmit={handleSignUp}>
                <h2 className='form-title'>Sign Up</h2>
                <div className="form-control">
                    <label htmlFor="">Email</label>
                    <input className='email-form' type="email" name="email" id="" placeholder='Email' required />
                </div>
                <div className="form-control">
                    <label htmlFor="">Password</label>
                    <input className='password-form' type="password" name="password" id="" placeholder='Password' required />
                </div>
                <div className="form-control">
                    <label htmlFor="">Confirm Password</label>
                    <input className='password-form' type="password" name="confirm" id="" placeholder='Confirm Password' required />
                </div>
                <input className='btn-submit' type="submit" value="Sign Up" />
                <p><small>Already have an account? <Link to="/login">Login</Link></small></p>
                <p>{error}</p>
            </form>
        </div>
    );
};

export default SignUp;