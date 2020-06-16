import React from 'react';
import { Link } from 'react-router-dom';

import './navigation-bar.styles.css';

const NavigationBar = ({type='text', navItems, className=''}) => (
    <ul className={`navigation-bar ${className}`}>
        {
            navItems.map(([label, link, image], indx) => (
                <li key={indx}>
                    <Link to={link}> 
                        { type === 'text'? label:
                        <img src={require(`../../assets/${image}`)} alt={label}/>}
                    </Link>
                </li>
            ))
        }
    </ul>
);
export default NavigationBar;