import React from 'react';
import './shoppage.styles.css';

import ShopContainer from '../../components/shop-container/shop-container.component';

const ShopPage = () => (
    <div className='shoppage'>
        SHOP PAGE
        <ShopContainer category='low'/>
    </div>
);

export default ShopPage;