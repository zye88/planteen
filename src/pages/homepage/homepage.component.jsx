import React from 'react';
import HOMEPAGE_DATA from './homepage.data';

// Import components
import Section from '../../components/section/section.component';
import ColumnSection from '../../components/column-section/column-section.component';
import PartnerSection from '../../components/partner-section/partner-section.component';
import ReviewSection from '../../components/review-section/review-section.component';

// Import styling components and images
import './homepage.styles.css';
import BlobImg from '../../assets/blob.svg';
import LeafImg from '../../assets/leaf4.svg';

const HomePage = () => {
    const { intro, 
            workshop, 
            gift, 
            shopAirPlant, 
            shopSnakePlant, 
            shopFiddleLeafFig } = HOMEPAGE_DATA;
    return (
        <div className='homepage'>
            <Section
                addClass='section--row intro-section section--pic-right' 
                { ...intro}
                buttons={[
                    {                 
                        label: 'Explore Plants',
                        arrow: true,
                        redirectLink: '/plants'
                    },
                    {
                        label: 'Discover Workshops',
                        arrow: true,
                        inverted: true,
                        redirectLink: '/workshops'
                    }]}/>
            <img src={BlobImg} className='blob-image' alt='Blob Background'/>
            <PartnerSection/>
            <section className='shop-section'>
                <Section 
                    { ...shopAirPlant}
                    addClass='section--col'
                    buttons={[
                        {                 
                            label: 'Shop Now',
                            redirectLink: '/plants'
                        }]}/>
                <Section 
                    { ...shopSnakePlant}
                    addClass='section--col'
                    buttons={[
                        {                 
                            label: 'Shop Now',
                            redirectLink: '/plants'
                        }]}/>
                <Section 
                    { ...shopFiddleLeafFig}
                    addClass='section--col'
                    buttons={[
                        {                 
                            label: 'Shop Now',
                            redirectLink: '/plants'
                        }]}/>
            </section>
            <img src={LeafImg} className='leaf-image' alt='Leaf Background'/>
            <section className='workshop-section'>
                <Section 
                    { ...workshop}
                    buttons={[
                        {                 
                            label: 'Book Now',
                            redirectLink: '/workshops'
                        }]}/>
            </section>
            <section className='gift-section section--pic-right'>
                <Section 
                    { ...gift}
                    buttons={[
                        {                 
                            label: 'Book Now',
                            redirectLink: '/gift'
                        }]}/>
            </section>
            {/* <ReviewSection/> */}
        </div> 
    )
};

export default HomePage;