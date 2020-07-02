import React from 'react';
import { connect } from 'react-redux';
import { selectCartTotals } from '../../redux/cart/cart.selectors';
import './order-summary.styles.css';

const OrderSummary = ({ cartTotals: [total, tax, totalWithTax] }) => (
    <div className='order-summary'>
        <span>Total (excl. tax): ${total}</span>
        <span>Tax: ${tax}</span>
        <span>Total (incl. tax): ${totalWithTax}</span>
    </div>
);

const mapStateToProps = state => ({
    cartTotals: selectCartTotals(state)
});

export default connect(mapStateToProps)(OrderSummary);