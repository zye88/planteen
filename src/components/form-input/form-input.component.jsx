import React from 'react';
import './form-input.styles.css';
import { capFirstWord } from '../component.utils';

const FormInput = ({placeholder, type, error, name, required, handleChange}) => (
    <div className='form-input'>
        <input 
            name={name}
            type={type} 
            placeholder={capFirstWord(placeholder)} 
            onChange={handleChange}
            required={required}/>
        <span className='validation-error'>{error? error: ''}</span>
    </div>
);

export default FormInput;