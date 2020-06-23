import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shoppage/shoppage.component';
import ProductPage from './pages/productpage/productpage.component';
import ContactPage from './pages/contactpage/contactpage.component';
import CheckoutPage from './pages/checkoutpage/checkoutpage.component';
import SignInUpPage from './pages/sign-in-up-page/sign-in-up-page.component';

const App = () => (
  <div className="App">
    <Header/>
    <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route path='/shop/:category/:id' component={ProductPage}/>
      <Route path='/shop/:category' component={ShopPage}/>
      <Route path='/checkout' component={CheckoutPage}/>
      <Route path='/contact' component={ContactPage}/>
    </Switch>
  </div>
);

export default App;
