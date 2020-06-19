import React from 'react';
import './review-item.styles.css';

const ReviewItem = ({review, reviewer}) => (
    <div className='review-item'>
        <span className='review'>{review}</span>
        <span className='reviewer'>--{reviewer}</span>
    </div>
);

export default ReviewItem;