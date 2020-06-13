import React from 'react';
import './dropdown.styles.css';

const Dropdown = ({ title, items }) => (
    <div className='dropdown-container'>
        <span className='dropdown-title'>{title.toUpperCase()}</span>
        <div className='dropdown-content'>{items}</div>
    </div>
);

export default Dropdown;

