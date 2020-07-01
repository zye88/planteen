import React from 'react';
import { Link } from 'react-router-dom';
import backIcon from '../../img/chevron-back-outline.svg';
import './go-to-action.styles.css';

const GoToAction = ({linkUrl, label}) => (
    <Link className='go-to' to={linkUrl}>
        <img src={backIcon} alt='Back Icon'/>
        <span>{label}</span>
    </Link>
);

export default GoToAction;