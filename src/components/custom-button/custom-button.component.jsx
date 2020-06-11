import React from 'react';
import './custom-button.styles.css';

const CustomButton = ({label, handleClick}) => (
    <button onClick={handleClick}>
        {label}
    </button>
);

export default CustomButton;