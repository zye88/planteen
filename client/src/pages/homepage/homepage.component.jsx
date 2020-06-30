import React from 'react';
import HOME_DATA from './homepage.data';
import './homepage.styles.css';
import Section from '../../components/section/section.component';

const HomePage = () => (
        <div className='homepage'>
            <Section { ...HOME_DATA.plants}/>
            <Section { ...HOME_DATA.gift}/>
            <Section { ...HOME_DATA.accessories}/>
        </div>
);

export default HomePage;