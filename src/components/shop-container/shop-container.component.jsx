import React from 'react';
import './shop-container.styles.css';
import SHOP_DATA from './shop.data';

import ShopItem from '../shop-item/shop-item.component';


const ShopContainer = ({category}) => (
    <div className='shop-container'>
        <h2></h2>
        <div className='shop-items'>
            {
                SHOP_DATA[category].map(item => 
                    <ShopItem 
                        key={item.id}
                        item={item}/>)
            }
        </div>
    </div>
);

export default ShopContainer;