import React from 'react';
import { Link } from 'react-router-dom';

// Redux-related imports
import { connect } from 'react-redux';
import { selectProductDetails } from '../../redux/shop/shop.selectors';
import { addCartItem } from '../../redux/cart/cart.action';

// Component imports
import CustomButton from '../../components/custom-button/custom-button.component';
import CareContainer from '../../components/care-container/care-container.component';

// Style-related imports
import './productpage.styles.css';
import backIcon from '../../img/chevron-back-outline.svg';

const ProductPage = ({productDetails, match, addCartItem}) => {
    const { id, name, price, image, description, care} = productDetails;
    const formattedCategory = match.params.category.charAt(0).toUpperCase() + 
                                match.params.category.slice(1);
    return (
    <div className='productpage'>
        <Link className='to-category' to={`/shop/${match.params.category}`}>
            <img src={backIcon} alt='Back Icon'/>
            <span>Back to {formattedCategory}</span>
        </Link>
        <div className='product-container'>
            <div className='product__col--1'>
                <img src={require(`../../img/${image}`)} alt={name}/>
            </div>
            <div className='product__col--2'>
                <h2>{name}</h2>
                <p>{description}</p>
                {care? <CareContainer care={care}/> : ''}
                <CustomButton
                    label={`Add To Cart - $${price}`}
                    handleClick={() => 
                        addCartItem({ id, name, price, image })}/>
            </div>
        </div>
    </div>
)};

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