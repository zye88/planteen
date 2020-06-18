import React from 'react';

// Import styles and images
import './review-section.styles.css';
import AirbnbLogo from '../../assets/airbnb-logo.png';
import GoogleReviews from '../../assets/google-reviews.png'
import Rating from '../../assets/rating.png';

const ReviewSection = () => (
    <div className='review-section'>
        <div className='review-header'>
            <div className='rating-summary'>
                <h2>220+ five star reviews from people who took our workshops.</h2>
                <img src={Rating} alt='Rating Image'/>
            </div>
            <div className='logo-container'>
                <img src={AirbnbLogo} alt='Airbnb Logo'/>
                <img src={GoogleReviews} alt='Google Logo'/>
            </div>
        </div>
        <div className='review-listings'>
        </div>
    </div>
);

export default ReviewSection;