import React from 'react';
import { connect } from 'react-redux';
import { selectProductDetails } from '../../redux/shop/shop.selectors';
import CustomButton from '../../components/custom-button/custom-button.component';
import './productpage.styles.css';

const ProductPage = ({selectProductDetails}) => {
    const { name, price, image, description, care} = selectProductDetails;
    console.log(selectProductDetails);
    return (
    <div className='productpage'>
        <div className='product__col--1'>
            <img src={require(`../../img/${image}`)} alt={name}/>
        </div>
        <div className='product__col--2'>
            <h2>{name}</h2>
            <p>{description}</p>
            <p>{care}</p>
            <CustomButton
                label={`Add To Cart - $${price}`}
                handleClick={() => {}}/>
        </div>
    </div>
)};

const mapStatetoProps = (state, ownProps) => {
    const { category, id } = ownProps.match.params;
    return {
        selectProductDetails: selectProductDetails(category, id)(state)
    }
}
export default connect(mapStatetoProps)(ProductPage);