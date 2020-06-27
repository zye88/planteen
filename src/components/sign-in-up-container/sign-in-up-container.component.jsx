import React, { useState, useEffect } from 'react';
import { signUpWithEmail, signInWithEmail } from '../../firebase/firebase.utils';
import './sign-in-up-container.styles.css';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

const SignInUpContainer = ({ signup, changeComponent }) => {
    const [credentials, setCredentials] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [validationErrors, setValidationErrors] = useState({
        confirmError: ''
    });

    useEffect(() => {
        console.log('signup changed');
        clearAllInput();
    }, [signup]);

    const { displayName, email, password, confirmPassword } = credentials;
    const { confirmError } = validationErrors;

    const handleChange = e => {
        const { name, value } = e.target;
        setCredentials({ ...credentials, [name]: value});
    }

    const validateInput = () => {
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
    }

    return (
        <div className='sign-in-up-container'>
            <h2>{ signup? 'Setup an account now': 'Sign in now'}</h2>
            <form className='sign-in-up-form' onSubmit={handleSubmit}>
                {signup?
                    <FormInput 
                        name='displayName'
                        placeholder='display name' 
                        type='text' 
                        value={displayName} 
                        handleChange={handleChange}
                        required/>:''}
                <FormInput 
                    name='email'
                    placeholder='email' 
                    type='email' 
                    value={email} 
                    handleChange={handleChange}
                    required/>
                <FormInput 
                    name='password'
                    placeholder='password' 
                    type='password' 
                    value={password} 
                    handleChange={handleChange}
                    required/>
                { signup? 
                    <FormInput 
                        name='confirmPassword'
                        placeholder='confirm password' 
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
                onClick={changeComponent}>{signup? 
                    'Back to Sign In':'Go to Sign Up'}</span>
        </div>
    )
};

export default SignInUpContainer;