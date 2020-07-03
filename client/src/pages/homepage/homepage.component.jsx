import React from 'react';
import './homepage.styles.css';
import Section from '../../components/section/section.component';
import { selectPageData } from '../../redux/page/page.selectors';
import { connect } from 'react-redux';

const HomePage = ({ selectPageData }) => { 
    if (selectPageData('home')) {
        const { plants, gift, accessories } = selectPageData('home');
        return (
            <div className='homepage'>
                <Section { ...plants}/>
                <Section { ...gift}/>
                <Section { ...accessories}/> 
            </div>
        );
    } else {
        return <div className='homepage'/>
    }
}

const mapStateToProps = state => ({
    selectPageData: pageName => selectPageData(pageName)(state)
});

export default connect(mapStateToProps)(HomePage);