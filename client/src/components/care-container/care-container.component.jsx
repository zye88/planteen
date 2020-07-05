import React from 'react';
import './care-container.styles.css';

const CareContainer = ({id, care}) => {
    const icons = ['sunny-outline.svg', 'aperture-outline.svg', 'water-outline.svg'];
    const labels = ['Sun', 'Light', 'Water'];
    return (
        <div className='care-container'>
            {
                care.map((item, indx) =>
                    <div 
                        key={`${id}-${labels[indx]}`}
                        className='care__item'>
                        <img src={`/img/${icons[indx]}`} alt={labels[indx]}/>
                        <span>{labels[indx]}: {item}</span>
                    </div>)
            }         
        </div>
)};

export default CareContainer;