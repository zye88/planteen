import React from 'react';
import './category-item.styles.css';

import CustomButton from '../custom-button/custom-button.component';

const CategoryItem = ({ category: {title, text, filename, path}}) => (
    <div className='category-item'>
        <div className='category-left'>
            <img src={require(`../../assets/${filename}`)}/>
        </div>
        <div className='category-right'>
            <h3>{title}</h3>
            <p>{text}</p>
            <CustomButton 
                label={'SHOP NOW'} 
                handleClick={() => { console.log('sth happened')}}/>
            <div>{path}</div>
        </div>
    </div>
);

export default CategoryItem;