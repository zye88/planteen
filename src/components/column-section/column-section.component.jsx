import React from 'react';
import './column-section.styles.css';

import Section from '../section/section.component';

const ColumnSection = ({image, title, ...otherProps}) => (
    <div className='column-section'>
        <img 
            className='section-image'
            src={require(`../../assets/${image}`)} alt={title}/>
        <Section {...otherProps} title={title}/>
    </div>
);

export default ColumnSection;