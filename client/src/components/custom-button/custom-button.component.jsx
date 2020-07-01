import React from 'react';
import {withRouter} from 'react-router-dom';
import './custom-button.styles.css';

const CustomButton = ({
        label, 
        linkUrl, 
        handleClick, 
        white, 
        googleSignIn, 
        facebookSignIn, 
        disabled,
        history}) => (
    <button 
        className={`custom-btn ${white? 'btn--white': 
            googleSignIn? 'btn-google':
            facebookSignIn? 'btn-facebook':
            disabled? 'btn--disabled':
            'btn--standard'}`}
        onClick={() => {
            if(linkUrl) history.push(linkUrl);
            if(handleClick) handleClick();
        }}
        disabled={disabled}>
        {label}
    </button>
);

export default withRouter(CustomButton);