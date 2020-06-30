import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import './text-navigation.styles.css';

const TextNavigation = ({location}) => {
    const navItems=[['Plants', '/shop/plants'], 
                    ['Accessories', '/shop/accessories'], 
                    ['Gifts', '/shop/gifts'], 
                    ['Contact Us', '/contact']];
    return (
        <nav className='text-navigation'>
            <ul>
                {
                    navItems.map(([label, linkUrl]) => (
                        <li 
                            key={label} 
                            className={`nav-item ${location.pathname === linkUrl? 
                            'nav-item--active':''}`}>
                            <Link to={linkUrl}> 
                                {label}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </nav>
)};
export default withRouter(TextNavigation);