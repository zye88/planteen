import React from 'react';
import { capFirstWord } from '../../components/component.utils.js';

// Redux-related imports
import { connect } from 'react-redux';
import { selectProductDetails } from '../../redux/shop/shop.selectors';
import { addCartItem } from '../../redux/cart/cart.action';

// Component imports
import CustomButton from '../../components/custom-button/custom-button.component';
import CareContainer from '../../components/care-container/care-container.component';
import GoToAction from '../../components/go-to-action/go-to-action.component';

// Style-related imports
import './productpage.styles.css';

const ProductPage = ({ productDetails, match, addCartItem }) => {
    if(productDetails) {
        const { id, name, price, image, description, care} = productDetails;
        return (
            <div className='productpage'>
                <GoToAction 
                    linkUrl={`/shop/${match.params.category}`}
                    label={`Back to ${capFirstWord(match.params.category)}`}/>
                <div className='product-container'>
                    <div className='product__col--1'>
                        <img src={require(`../../img/${image}`)} alt={name}/>
                    </div>
                    <div className='product__col--2'>
                        <h2>{name}</h2>
                        <p>{description}</p>
                        {care? <CareContainer id={id} care={care}/> : ''}
                        <CustomButton
                            label={`Add To Cart - $${price}`}
                            handleClick={() => 
                                addCartItem({ id, name, price, image })}/>
                    </div>
                </div>
            </div>
        );
    }
    return <div className='productpage'/>
};

const mapStatetoProps = (state, ownProps) => {
    const { category, id } = ownProps.match.params;
    return {
        productDetails: selectProductDetails(category, id)(state)
    }
}

const mapDispatchToProps = dispatch => ({
    addCartItem: item => dispatch(addCartItem(item))
});

export default connect(mapStatetoProps, mapDispatchToProps)(ProductPage);