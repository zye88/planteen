import React from 'react';
import {withRouter} from 'react-router-dom';
import './custom-button.styles.css';

const CustomButton = ({label, linkUrl, handleClick, white, history}) => (
    <button 
        className={`custom-btn ${white? 'btn--white': 'btn--standard'}`}
        onClick={() => {
            if(linkUrl) history.push(linkUrl);
            if(handleClick) handleClick();
        }}>
        <span>{label}</span>
    </button>
);

export default withRouter(CustomButton);