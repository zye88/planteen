import React from 'react';
import {withRouter} from 'react-router-dom';
import './custom-button.styles.css';

const CustomButton = ({label, linkUrl, handleClick, addClass, history}) => (
    <button 
        className={`custom-btn ${addClass}`}
        onClick={linkUrl? 
                    () => {history.push(linkUrl)}: 
                    handleClick}>
        <p>{label}</p>
    </button>
);

export default withRouter(CustomButton);