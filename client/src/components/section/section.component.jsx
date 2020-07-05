import React from 'react';
import './section.styles.css';
import CustomButton from '../custom-button/custom-button.component';

const Section = ({title, info, image, addClass, btn}) => (
    <section className={`section ${addClass}`}>
        <img 
            className='section__img' 
            src={`/img/${image}`} alt={title}/>
        <div className='section__info'>
            <h2>{title}</h2>
            <p>{info}</p>
            <CustomButton {...btn}/>
        </div>
    </section>
);

export default Section;