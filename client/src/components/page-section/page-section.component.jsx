import React from 'react';
import './page-section.styles.css';
import CustomButton from '../custom-button/custom-button.component';

const PageSection = ({title, info, image, addClass, btn}) => {

    return (
    <section className={`page-section ${addClass}`}>
        <img 
            className='section__img' 
            src={require(`../../img/${image}`)} alt={title}/>
        <div className='section__info'>
            <h2>{title}</h2>
            <p>{info}</p>
            <CustomButton {...btn}/>
        </div>
    </section>
)};

export default PageSection;