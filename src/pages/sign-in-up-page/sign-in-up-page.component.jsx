import React, { Component } from 'react';
import { signInWithPlatform } from '../../firebase/firebase.utils';
import CustomButton from '../../components/custom-button/custom-button.component';
import './sign-in-up-page.styles.css';

import SignInUpContainer from '../../components/sign-in-up-container/sign-in-up-container.component';

class SignInUpPage extends Component {
    constructor() {
        super();
        this.state = {
            signup: false
        }
    }

    handleSignIn = async platform => {
        try {
            await signInWithPlatform(platform);
        } catch(err) {
            console.log('Failed to sign in:', err);
        }
    }

    render() {
        return (
            <div className='sign-in-up'>
                <div className='social-acct-signinup'>
                    <CustomButton 
                        label='Sign In With Google' 
                        handleClick={() => this.handleSignIn('google')}/>
                    <CustomButton 
                        label='Sign In With Facebook' 
                        handleClick={() => this.handleSignIn('facebook')}/>
                </div>
                <SignInUpContainer signup={this.state.signup} changeComponent={() => {this.setState({ signup: !this.state.signup})}}/>
            </div>
        );
    }
}

export default SignInUpPage;