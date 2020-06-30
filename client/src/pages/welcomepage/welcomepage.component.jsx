import React from 'react';
import './welcomepage.styles.css';
import { signOutUser } from '../../firebase/firebase.utils';

import CustomButton from '../../components/custom-button/custom-button.component';

import { connect } from 'react-redux';
import { selectCurrentUser } from '../../redux/user/user.selectors';

const WelcomePage = ({currentUser }) => (
    <div className='welcome-page'>
        <h2>Welcome {currentUser.displayName}</h2>
        <CustomButton
            label='Logout' 
            handleClick={signOutUser}/>
    </div>
);

const mapStateToProps = state => ({
    currentUser: selectCurrentUser(state)
});

export default connect(mapStateToProps)(WelcomePage);