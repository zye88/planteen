import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { auth, db, getCartDoc } from './firebase/firebase.utils';
import './App.css';

import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.action';
import { selectCurrentUser } from './redux/user/user.selectors';
import { setCartItems } from './redux/cart/cart.action';
import { mergeCarts } from './redux/cart/cart.utils';
import { setPageData } from './redux/page/page.actions';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shoppage/shoppage.component';
import ProductPage from './pages/productpage/productpage.component';
import ContactPage from './pages/contactpage/contactpage.component';
import CheckoutPage from './pages/checkoutpage/checkoutpage.component';
import SignInUpPage from './pages/sign-in-up-page/sign-in-up-page.component';
import WelcomePage from './pages/welcomepage/welcomepage.component';
import OrderPage from './pages/orderpage/orderpage.component';

const App = ({ setCurrentUser, setCartItems, currentUser, setPageData }) => {

  const initLocalCart = () => {
    if(!localStorage.getItem('cartItems')) 
      localStorage.setItem('cartItems', JSON.stringify([]));
  }

  useEffect(() => {
    initLocalCart();
    let authUnsubscribe, userUnsubscribe;

    authUnsubscribe = auth.onAuthStateChanged(async userAuth => {
      const localCart = localStorage.getItem('cartItems');
      if(userAuth) {
          try {
            const userRef = db.doc(`users/${userAuth.uid}`);

            userUnsubscribe = userRef.onSnapshot(snapshot => {
              if(!snapshot.exists) return;

              const { email, displayName } = snapshot.data();
              setCurrentUser({ uid: snapshot.id, email, displayName});
            });

            const cartDoc = await getCartDoc(userAuth.uid);
            const userCart = mergeCarts(JSON.parse(localCart), cartDoc);

            setCartItems(userCart);
            localStorage.setItem('cartItems', JSON.stringify([]));
          } catch(err) {
            console.log('Error in retrieving user profile data from firebase:', err);
          }
      } else {
        setCurrentUser(null);
        setCartItems(JSON.parse(localCart));
      }
    });

    return () => {
      authUnsubscribe();
      if(userUnsubscribe) userUnsubscribe();
    }
  }, []);

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
        <Route path='/order-now' component={OrderPage}/>
      </Switch>
    </div>
  );
}

const mapStateToProps = state => ({
  currentUser: selectCurrentUser(state),
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
  setCartItems: cartItems => dispatch(setCartItems(cartItems)),
  setPageData: (page, data) => dispatch(setPageData(page, data))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);