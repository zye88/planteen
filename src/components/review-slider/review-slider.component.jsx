import React from 'react';
import './review-slider.styles.css';

import REVIEW_DATA from './review.data';
import ReviewItem from '../review-item/review-item.component';

const ReviewSlider = () => (
    <div className='review-slider'>
        {
            REVIEW_DATA.map(revItem => <ReviewItem {...revItem}/>)
        }
    </div>
);

export default ReviewSlider;