import React from 'react';
import { Link } from 'react-router-dom';

import './navigation.styles.css';

const Navigation = ({type, navItems, className}) => (
    <ul className={`navigation ${className}`}>
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
export default Navigation;