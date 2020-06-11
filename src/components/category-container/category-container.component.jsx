import React from 'react';
import './category-container.styles.css';
import SHOP_DATA from './shop.data';

import ShopItem from '../../components/shop-item/shop-item.component';


const CategoryContainer = ({category}) => (
    <div className='category-container'>
        <h2>{'Low Light Plants'}</h2>
        <div className='items'>
            {
                SHOP_DATA[category].map(item => 
                    <ShopItem 
                        key={item.id}
                        item={item}/>)
            }
        </div>
    </div>
);

export default CategoryContainer;