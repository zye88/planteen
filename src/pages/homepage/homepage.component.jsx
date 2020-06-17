import React from 'react';
import './homepage.styles.css';
import HOMEPAGE_DATA from './homepage.data';

import Section from '../../components/section/section.component';

const HomePage = () => {
    const { intro } = HOMEPAGE_DATA;
    return (
        <div className='homepage'>
            <Section 
                title={intro.title}
                image={intro.image}
                className='intro-section'/>
        </div>
)};

export default HomePage;