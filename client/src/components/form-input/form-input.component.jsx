import React from 'react';
import './form-input.styles.css';

const FormInput = ({
    label,
    placeholder, 
    type, 
    value, 
    error, 
    name, 
    required, 
    readOnly,
    handleChange}) => (
    <div className='form-input'>
        {label? 
            <label className='input__label'>{label}</label>:
             ''}
        <div className='input__error'>
            <input 
                name={name}
                value={value}
                type={type} 
                placeholder={placeholder} 
                onChange={handleChange}
                required={required}
                readOnly={readOnly}/>
            <span className='validation-error'>{error? error: ''}</span>
        </div>
    </div>
);

export default FormInput;