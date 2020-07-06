import React, { useState } from 'react';
import { signInWithPlatform } from '../../firebase/firebase.utils';
import CustomButton from '../../components/custom-button/custom-button.component';
import './sign-in-up-page.styles.css';

import SignInUpEmail from '../../components/sign-in-up-email/sign-in-up-email.component';

const SignInUpPage = () => {
    const [signup, setSignup] = useState(false);
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
            <div className='signinup-divider'/>
            <SignInUpEmail 
                signup={signup} 
                toggleSignup={() => setSignup(!signup)}/>
        </div>
    );
}

export default SignInUpPage;