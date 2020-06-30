import React, { useState, useEffect } from 'react';
import { signUpWithEmail, signInWithEmail } from '../../firebase/firebase.utils';
import './sign-in-up-email.styles.css';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

const SignInUpEmail = ({ signup, toggleSignup }) => {
    const [credentials, setCredentials] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [validationErrors, setValidationErrors] = useState({
        confirmError: ''
    });

    const { displayName, email, password, confirmPassword } = credentials;
    const { confirmError } = validationErrors;

    useEffect(() => {
        clearAllInput();
        clearAllErrors();
    }, [signup]);

    const handleChange = e => {
        const { name, value } = e.target;
        setCredentials({ ...credentials, [name]: value});
    }

    const validateInput = () => {
        clearAllErrors();

        if(signup && confirmPassword) {
            setValidationErrors({...validationErrors, 
                confirmError: password !== confirmPassword? 
                    'Passwords are not matching. Please try again':''
             });
        }
    }

    const clearAllInput = () => {
        setCredentials({
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        });
    }

    const clearAllErrors = () => {
        setValidationErrors({
            confirmError: ''
        });
    }

    const handleSubmit = e => {
        e.preventDefault();

        validateInput();
        if(confirmError) return;

        if(signup) {
            signUpWithEmail(email, password, displayName)
        } else {
            signInWithEmail(email, password);
        };

        clearAllInput();
    }

    return (
        <div className='sign-in-up-email'>
            <h2>{ signup? 'Setup an account now': 'Sign in now'}</h2>
            <form className='email-form' onSubmit={handleSubmit}>
                {signup?
                    <FormInput 
                        name='displayName'
                        placeholder='Display Name' 
                        type='text' 
                        value={displayName} 
                        handleChange={handleChange}
                        required/>:''}
                <FormInput 
                    name='email'
                    placeholder='Email' 
                    type='email' 
                    value={email} 
                    handleChange={handleChange}
                    required/>
                <FormInput 
                    name='password'
                    placeholder='Password' 
                    type='password' 
                    value={password} 
                    handleChange={handleChange}
                    required/>
                { signup? 
                    <FormInput 
                        name='confirmPassword'
                        placeholder='Confirm password' 
                        type='password' 
                        value={confirmPassword} 
                        handleChange={handleChange}
                        error={confirmError}
                        required/>:''}
                <CustomButton 
                    type='submit' 
                    label={signup? 'Sign Up':'Sign In'}/>
            </form>
            <span 
                className='change-sign-up-in-btn' 
                onClick={toggleSignup}>{signup? 
                    'Back to Sign In':'Go to Sign Up'}</span>
        </div>
    )
};

export default SignInUpEmail;