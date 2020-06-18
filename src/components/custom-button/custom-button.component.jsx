import React from 'react';
import {CustomButtonContainer} from './custom-button.styles';
import arrowRight from '../../assets/arrow-right.svg';

const CustomButton = ({label, handleClick, arrow=false, inverted=false}) => (
    <CustomButtonContainer onClick={handleClick} inverted={inverted}>
        <span>{label}</span>
        {/* {arrow? <img src={arrowRight} alt='Custom Button Arrow'/>: ''} */}
    </CustomButtonContainer>
);

export default CustomButton;