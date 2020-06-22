import React from 'react';
import {withRouter} from 'react-router-dom';
import './custom-button.styles.css';

const CustomButton = ({label, linkUrl, handleClick, addClass, history}) => (
    <button 
        className={`custom-btn ${addClass}`}
        onClick={() => {
            if(linkUrl) history.push(linkUrl);
            if(handleClick) handleClick();
        }}>
        <span>{label}</span>
    </button>
);

export default withRouter(CustomButton);