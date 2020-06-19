import React from 'react';
import arrowRight from '../../assets/arrow-right.svg';
import './custom-button.styles.css';

const CustomButton = ({label, handleClick, arrow=false, inverted=false}) => (
    <button 
        className={`custom-btn ${inverted? 'btn--inverted':''}`}
        onClick={handleClick}>
        <p>{label}</p>
        {arrow? <img src={arrowRight} alt='Arrow Right Image'/>: ''}
    </button>
);

export default CustomButton;