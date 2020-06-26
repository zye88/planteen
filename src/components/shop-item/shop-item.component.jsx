import React from 'react';
import {withRouter} from 'react-router-dom';
import './shop-item.styles.css';

import CustomButton from '../custom-button/custom-button.component';

const ShopItem = ({id, name, price, image, match}) => (
    <div className='shop-item'>
        <img 
            className='item__img'
            src={require(`../../img/${image}`)} 
            alt={name}/>
        <CustomButton
            label='view details' 
            white
            linkUrl={`${match.url}/${id}`}/>
        <div className='item__details'>
            <span className='item__name'>{name}</span>
            <span className='item__price'>${price}</span>
        </div>
    </div>
);

export default withRouter(ShopItem);