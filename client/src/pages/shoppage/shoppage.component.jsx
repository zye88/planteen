import React from 'react';
import { connect } from 'react-redux';

import ShopItem from '../../components/shop-item/shop-item.component';
import { selectCategory } from '../../redux/shop/shop.selectors';

import './shoppage.styles.css';


const ShopPage = ({category}) => {
    if(category) {
        const { title, items} = category;
        return (
            <div className='shoppage'>
                <h2>{title.toUpperCase()}</h2>
                <div className='shoppage__items'>
                    {
                        items.map(item => <ShopItem 
                                                key={item.id}
                                                {...item}/>)
                    }
                </div>
            </div>
        )
    } 
    return <div className='shoppage'/>
};

const mapStateToProps = (state, ownProps) => ({
    category: selectCategory(ownProps.match.params.category)(state)
});

export default connect(mapStateToProps)(ShopPage);