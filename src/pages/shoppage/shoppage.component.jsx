import React from 'react';
import { connect } from 'react-redux';

import ShopItem from '../../components/shop-item/shop-item.component';
import { selectCategory } from '../../redux/shop/shop.selectors';

import './shoppage.styles.css';


const ShopPage = ({selectCategory}) => {
    const { title, items} = selectCategory;
    return (
    <div className='shoppage'>
        <h2>{title}</h2>
        <div className='shoppage__items'>
            {
                items.map(item => <ShopItem 
                                        key={item.id}
                                        {...item}/>)
            }
        </div>
    </div>
)};

const mapStateToProps = (state, ownProps) => ({
    selectCategory: selectCategory(ownProps.match.params.category)(state)
});

export default connect(mapStateToProps)(ShopPage);