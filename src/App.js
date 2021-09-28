import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage_component';
import ShopPage from './pages/shop/shop_component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up_component';
import Header from './components/header/header_component';

function App() {
  return (
    <div >
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop' component={ShopPage}/>
        <Route path='/signin' component={SignInAndSignUpPage}/>
      </Switch>
   
    </div>
  );
}

export default App;
