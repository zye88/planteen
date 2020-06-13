import React from 'react';
import './shoppage.styles.css';

import ShopContainer from '../../components/shop-container/shop-container.component';

const ShopPage = () => (
    <div className='shoppage'>
        <ShopContainer category={'low'}/>
    </div>
);

export default ShopPage;