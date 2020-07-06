import React from 'react';
import { Link } from 'react-router-dom';
import './go-to-action.styles.css';

const GoToAction = ({linkUrl, label}) => (
    <Link className='go-to' to={linkUrl}>
        <img src={require('../../img/chevron-back-outline.svg')} alt='Back Icon'/>
        <span>{label}</span>
    </Link>
);

export default GoToAction;