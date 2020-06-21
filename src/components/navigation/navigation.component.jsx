import React from 'react';
import { Link } from 'react-router-dom';

import './navigation.styles.css';

const Navigation = ({type, navItems, addClass}) => (
    <nav className={`navigation ${addClass}`}>
        <ul>
            {
                navItems.map(([label, linkUrl, image], indx) => (
                    <li key={indx}>
                        <Link to={linkUrl}> 
                            { type === 'text'? label:
                            <img src={require(`../../img/${image}`)} alt={label}/>}
                        </Link>
                    </li>
                ))
            }
        </ul>
    </nav>
);
export default Navigation;