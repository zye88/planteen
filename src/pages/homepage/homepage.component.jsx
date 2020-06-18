import React from 'react';
import HOMEPAGE_DATA from './homepage.data';

// Import components
import Section from '../../components/section/section.component';
import ColumnSection from '../../components/column-section/column-section.component';
import PartnerSection from '../../components/partner-section/partner-section.component';
import ReviewSection from '../../components/review-section/review-section.component';

// Import styling components and images
import {HomePageContainer, 
        IntroSectionContainer, 
        WorkshopSectionContainer,
        GiftSectionContainer,
        ShopSectionContainer} from './homepage.styles';
import introImage from '../../assets/intro-section.png';
import workshopImage from '../../assets/planter-workshop.png';
import giftImage from '../../assets/gift.png';

const HomePage = () => {
    const { intro, 
            workshop, 
            gift, 
            shopAirPlant, 
            shopSnakePlant, 
            shopFiddleLeafFig } = HOMEPAGE_DATA;
    return (
        <HomePageContainer>
            <IntroSectionContainer>
                <Section 
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
                <img 
                    className='section-image'
                    src={introImage} alt={intro.title}/>
            </IntroSectionContainer>
            <PartnerSection/>
            <ShopSectionContainer>
                <ColumnSection 
                    { ...shopAirPlant}
                    buttons={[
                        {                 
                            label: 'Shop Now',
                            redirectLink: '/plants'
                        }]}
                    image='air-plant.png'/>
                <ColumnSection 
                    { ...shopSnakePlant}
                    buttons={[
                        {                 
                            label: 'Shop Now',
                            redirectLink: '/plants'
                        }]}
                    image='snake-plant.png'/>
                <ColumnSection 
                    { ...shopFiddleLeafFig}
                    buttons={[
                        {                 
                            label: 'Shop Now',
                            redirectLink: '/plants'
                        }]}
                    image='fiddle-leaf-fig.jpg'/>
            </ShopSectionContainer>
            <WorkshopSectionContainer>
                <img 
                    className='section-image'
                    src={workshopImage} alt={workshop.title}/>
                <Section 
                    { ...workshop}
                    buttons={[
                        {                 
                            label: 'Book Now',
                            redirectLink: '/workshops'
                        }]}/>
            </WorkshopSectionContainer>
            <GiftSectionContainer>
                <Section 
                    { ...gift}
                    buttons={[
                        {                 
                            label: 'Book Now',
                            redirectLink: '/gift'
                        }]}/>
                    <img 
                    className='section-image'
                    src={giftImage} alt={gift.title}/>
            </GiftSectionContainer>
            <ReviewSection/>
        </HomePageContainer>
    )
};

export default HomePage;