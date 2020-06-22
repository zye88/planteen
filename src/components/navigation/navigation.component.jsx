import React from 'react';
import { Link } from 'react-router-dom';

import './navigation.styles.css';

const Navigation = ({navItems, addClass}) => (
    <nav className={`navigation ${addClass}`}>
        <ul>
            {
                navItems.map(([label, linkUrl], indx) => (
                    <li key={indx}>
                        <Link to={linkUrl}> 
                            {label}
                        </Link>
                    </li>
                ))
            }
        </ul>
    </nav>
);
export default Navigation;