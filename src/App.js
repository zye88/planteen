import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shoppage/shoppage.component';
import ContactPage from './pages/contactpage/contactpage.component';
import CheckoutPage from './pages/checkoutpage/checkoutpage.component';
import SignInUpPage from './pages/sign-in-up-page/sign-in-up-page.component';

class App extends Component {
  constructor() {
    super();
    this.state = {
      cart: {
        items: [1, 2, 3],
        count: 3
      }
    }
  }

  render() {
    const { cart } = this.state;

    return (
      <div className="App">
        <Header cart={cart}/>
        <Switch>
          <Route exact path='/'>
            <HomePage/>
          </Route>
          <Route path='/shop'>
            <ShopPage/>
          </Route>
          <Route path='/contact'>
            <ContactPage/>
          </Route>
          <Route path='/checkout'>
            <CheckoutPage/>
          </Route>
          <Route path='/signin'>
            <SignInUpPage/>
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
