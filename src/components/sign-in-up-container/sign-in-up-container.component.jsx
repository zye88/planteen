import React, { Component } from 'react';
import './sign-in-up-container.styles.css';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

class SignInUpContainer extends Component {
    constructor() {
        super();
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleChange = e => {
        console.log(e.target);
    }

    handleSetup = () => {
        console.log('sth setup');
    }

    handleSignin = () => {
        console.log('sth sign in');
    }

    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        const { signup, changeComponent } = this.props;
        return (
            <div className='sign-in-up-container'>
                <h2>{ signup? 'Setup an account now': 'Sign in now'}</h2>
                <form className='sign-in-up-form'>
                    { signup? '':
                        <FormInput 
                        placeholder='display name' 
                        type='text' 
                        value={displayName} 
                        handleChange={this.handleChange}/>}
                        <FormInput 
                            placeholder='email' 
                            type='email' 
                            value={email} 
                            handleChange={this.handleChange}/>
                        <FormInput 
                            placeholder='password' 
                            type='password' 
                            value={password} 
                            handleChange={this.handleChange}/>
                    { signup? 
                        <div>
                            <FormInput 
                                placeholder='confirm password' 
                                type='password' 
                                value={confirmPassword} 
                                handleChange={this.handleChange}/>
                            <CustomButton label='Sign Up' onClick={this.handleSetup}/>
                            <span 
                                className='change-sign-up-in-btn' 
                                onClick={changeComponent}>Back to Sign In</span>
                        </div>:
                        <div>
                            <CustomButton label='Sign In' onClick={this.handleSignin}/>
                            <span 
                                className='change-sign-up-in-btn' 
                                onClick={changeComponent}>Go to Sign Up</span>
                        </div>}
                </form>
            </div>
        )
    }
};

export default SignInUpContainer;