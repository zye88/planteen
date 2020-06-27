import React, { Component } from 'react';
import { signInWithPlatform } from '../../firebase/firebase.utils';
import CustomButton from '../../components/custom-button/custom-button.component';
import './sign-in-up-page.styles.css';

import SignInUpContainer from '../../components/sign-in-up-container/sign-in-up-container.component';

class SignInUpPage extends Component {
    constructor() {
        super();
        this.state = {
            signup: true // TESTING
        }
    }

    render() {
        return (
            <div className='sign-in-up'>
                <div className='social-acct-signinup'>
                    <div className='sign-in-options'/>
                    <CustomButton 
                        label='Sign In With Google'
                        googleSignIn
                        handleClick={() => signInWithPlatform('google')}/>
                    <CustomButton 
                        label='Sign In With Facebook' 
                        facebookSignIn
                        handleClick={() => signInWithPlatform('facebook')}/>
                </div>
                <SignInUpContainer 
                    signup={this.state.signup} 
                    changeComponent={() => 
                        {this.setState({ signup: !this.state.signup})}}/>
            </div>
        );
    }
}

export default SignInUpPage;