import React from 'react';
import './section.styles.css';
import CustomButton from '../custom-button/custom-button.component';

const Section = ({title, info, buttons}) => (
    <div className='section'>
        <div className='section-text'>
            <h2>{title}</h2>
            <span>{info}</span>
        </div>
        <div className='section-buttons'>
            {buttons.map(btn => <CustomButton {...btn}/>)}
        </div>
    </div>
);

export default Section;