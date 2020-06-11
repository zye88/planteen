import React from 'react';
import './category-item.styles.css';

const CategoryItem = ({ category: {title, text, imageUrl, path}}) => (
    <div className='category-item'>
        <div>{imageUrl}</div>
        <h3>{title}</h3>
        <p>{text}</p>
        <div>{path}</div>
    </div>
);

export default CategoryItem;