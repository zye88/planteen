import React from 'react';
import './section.styles.css';

import CustomButton from '../../components/custom-button/custom-button.component';

const Section = ({title, info, buttons, image, className}) => (
    <div className={`section ${className}`}>
        <div className='section-info'>
            <h2>{title}</h2>
            <span>{info}</span>
            {/* <CustomButton 
                label={label} 
                handleClick={handleClick}/> */}
        </div>
        <div className='section-image'>
            <img src={require(`../../assets/${image}`)}/>
        </div>
    </div>
);

export default Section;