import React from 'react';
import './form-input.styles.css';
import { capFirstWord } from '../component.utils';

const FormInput = ({placeholder, type, handleChange}) => (
    <div className='form-input'>
        <input 
            type={type} 
            placeholder={capFirstWord(placeholder)} 
            onChange={handleChange}/>
    </div>
);

export default FormInput;