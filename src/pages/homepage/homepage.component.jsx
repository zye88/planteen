import React from 'react';
import HOMEPAGE_DATA from './homepage.data';

// Import components
import InfoSection from '../../components/section/section.component';

// Import styling components and images
import {HomePageContainer, 
        IntroSectionContainer, 
        WorkshopSectionContainer,
        GiftSectionContainer} from './homepage.styles';
import introImage from '../../assets/intro-section-image.png';
import workshopImage from '../../assets/planter-workshop-image.png';
import giftImage from '../../assets/gift-image.png';

const HomePage = () => {
    const { intro, workshop, gift } = HOMEPAGE_DATA;
    return (
        <HomePageContainer>
            <IntroSectionContainer>
                <InfoSection 
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
                    src={introImage} alt='Homepage Intro Image'/>
            </IntroSectionContainer>
            <WorkshopSectionContainer>
                <img 
                    className='section-image'
                    src={workshopImage} alt='Workshop Image'/>
                <InfoSection 
                    { ...gift}
                    buttons={[
                        {                 
                            label: 'Book Now',
                            redirectLink: '/workshops'
                        }]}/>
            </WorkshopSectionContainer>
            <GiftSectionContainer>
                <InfoSection 
                    { ...gift}
                    buttons={[
                        {                 
                            label: 'Book Now',
                            redirectLink: '/gift'
                        }]}/>
                    <img 
                    className='section-image'
                    src={giftImage} alt='Gift Image'/>
            </GiftSectionContainer>
        </HomePageContainer>
    )
};

export default HomePage;