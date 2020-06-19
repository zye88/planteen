import React from 'react';
import './section.styles.css';
import CustomButton from '../custom-button/custom-button.component';

const Section = ({title, info, buttons, image, addClass}) => (
    <section className={`section ${addClass}`}>
        <img 
            className='section__img' 
            src={require(`../../assets/${image}`)}/>
        <div className='section__text-btns'>
            <div className='section__text'>
                <h2>{title}</h2>
                <p>{info}</p>
            </div>
            <div className='section__btns'>
                {buttons.map(btn => <CustomButton {...btn}/>)}
            </div>
        </div>
    </section>
);

export default Section;