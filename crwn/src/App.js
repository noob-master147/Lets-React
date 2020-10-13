import React from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.css'

import Header from './components/header/header'
import HomePage from './pages/homepage/homepage'
import ShopPage from './pages/shop/shop'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up'

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/signin' component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;
