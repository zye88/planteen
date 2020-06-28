import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';

import { auth, db, updateCartDoc } from './firebase/firebase.utils';

import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.action';
import { selectCurrentUser } from './redux/user/user.selectors';
import { setCart } from './redux/cart/cart.action';
import { selectCartItems } from './redux/cart/cart.selectors';
import { mergeCarts } from './redux/cart/cart.utils';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shoppage/shoppage.component';
import ProductPage from './pages/productpage/productpage.component';
import ContactPage from './pages/contactpage/contactpage.component';
import CheckoutPage from './pages/checkoutpage/checkoutpage.component';
import SignInUpPage from './pages/sign-in-up-page/sign-in-up-page.component';
import WelcomePage from './pages/welcomepage/welcomepage.component';

class App extends Component {
  authUnsubscribe;

  componentDidMount() {
    const { setCurrentUser, setCart } = this.props;

    this.authUnsubscribe = auth.onAuthStateChanged(userAuth => {
      const localCart = localStorage.getItem('cartItems');
      if(userAuth) {
          try {
            const userRef = db.doc(`users/${userAuth.uid}`);

            const snapShotUnsubscribe = userRef.onSnapshot(async snapshot => {
              snapShotUnsubscribe();
              const { email, displayName } = snapshot.data();
              setCurrentUser({ uid: snapshot.id, email, displayName});

              const cartRef = await db.doc(`carts/${snapshot.id}`).get();
              let userCart = cartRef.exists? JSON.parse(cartRef.data().cartItems): [];
              if(localCart) userCart = mergeCarts(JSON.parse(localCart), userCart);

              updateCartDoc(snapshot.id, userCart);
              setCart(userCart);
              localStorage.setItem('cartItems', JSON.stringify([]));
            });
          } catch(err) {
            console.log('Error in retrieving user profile data from firebase:', err);
          }
      } else {
        setCurrentUser(null);
        setCart(JSON.parse(localCart));
      }
    });
  };

  componentWillUnmount() {
    this.authUnsubscribe();
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
  currentUser: selectCurrentUser(state),
  cartItems: selectCartItems(state)
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
  setCart: cartItems => dispatch(setCart(cartItems))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);