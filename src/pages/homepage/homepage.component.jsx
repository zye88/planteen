import React from 'react';
import './homepage.styles.css';
import CATEGORIES from './categories.data';

import CategoryItem from '../../components/category-item/category-item.component';

const HomePage = () => (
    <div className='homepage'>
        <h2>HOMEPAGE</h2>
        <div className='category-container'>
            { 
                CATEGORIES.map(category => <CategoryItem 
                    key={category.id}
                    category={category}/>)
            }
        </div>
    </div>
);

export default HomePage;