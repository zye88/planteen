import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';

import { auth, db, createUserProfile } from './firebase/firebase.utils';

import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.action';
import { selectCurrentUser } from './redux/user/user.selectors';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shoppage/shoppage.component';
import ProductPage from './pages/productpage/productpage.component';
import ContactPage from './pages/contactpage/contactpage.component';
import CheckoutPage from './pages/checkoutpage/checkoutpage.component';
import SignInUpPage from './pages/sign-in-up-page/sign-in-up-page.component';
import WelcomePage from './pages/welcomepage/welcomepage.component';

class App extends Component {
  unsubscribe;

  componentDidMount() {
    this.unsubscribe = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
          try {
            const userRef = db.doc(`users/${userAuth.uid}`);
            userRef.onSnapshot(snapshot => { 
              this.props.setCurrentUser(snapshot.data());
            });
          } catch(err) {
            console.log('Error in retrieving user profile data from firebase:', err);
          }
      } else {
        this.props.setCurrentUser(null);
      }
    })};

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const { currentUser } = this.props;
    return (
      <div className="App">
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/shop/:category/:id' component={ProductPage}/>
          <Route path='/shop/:category' component={ShopPage}/>
          <Route path='/checkout' component={CheckoutPage}/>
          <Route path='/contact' component={ContactPage}/>
          <Route path='/sign-in-up' render={() => 
            currentUser? <Redirect to='/welcome'/>:<SignInUpPage/>}/>
          <Route path='/welcome' render={() =>
            currentUser? <WelcomePage/>:<Redirect to='/sign-in-up'/>}/>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: selectCurrentUser(state)
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);