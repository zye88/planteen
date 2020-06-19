import React from 'react';
import './partner.styles.css';

const PartnerSection = () => {
    const partnerLogos = [
        'airbnb-logo.png', 
        'deloitte-logo.png', 
        'google-logo.png',
        'pwc-logo.png',
        'sephora-logo.png',
        'sonos-logo.png'];
    return (
        <section className='partner-section'>
            <h2>You are in good company</h2>
            <div>
                {
                    partnerLogos.map(fn => 
                        <img src={require(`../../assets/${fn}`)} alt='Partner Logo'/>)
                }
            </div>
        </section>
    );
}

export default PartnerSection;