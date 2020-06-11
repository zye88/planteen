import React from 'react';
import './shoppage.styles.css';

import CategoryContainer from '../../components/category-container/category-container.component';

const ShopPage = () => (
    <div className='shoppage'>
        <CategoryContainer category={'low'}/>
    </div>
);

export default ShopPage;