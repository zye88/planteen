import React from 'react';
import './shop-item.styles.css';

import CustomButton from '../custom-button/custom-button.component';

const ShopItem = ({item: {name, price, filename}}) => (
    <div className='shop-item'>
        {/* <img src={require(`../../assets/${filename}`)}/> */}
        <div className='item-details'>
            <span>{name}</span>
            <span>${price}</span>
        </div>
        <CustomButton
            label='ADD TO CART' 
            handleClick={() => console.log('Added to cart')}/>
    </div>
);

export default ShopItem;