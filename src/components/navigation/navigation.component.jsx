import React from 'react';
import { Link } from 'react-router-dom';

import './navigation.styles.css';

const Navigation = ({type, navItems, addClass}) => (
    <nav className={`navigation ${addClass}`}>
        <ul>
            {
                navItems.map(([label, link, image], indx) => (
                    <li key={indx}>
                        <Link to={link}> 
                            { type === 'text'? label:
                            <img src={require(`../../assets/${image}`)} alt={`${label} Icon`}/>}
                        </Link>
                    </li>
                ))
            }
        </ul>
    </nav>
);
export default Navigation;