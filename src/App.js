import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import Homepage from './pages/homepage/Homepage';
import ShopPage from './pages/shoppage/ShopPage';


function App() {
  return (
  <div> 
    <Switch>
      <Route exact path="/" component={Homepage}/>
      <Route exact path="/shop" component={ShopPage}/>
    </Switch>
   

  </div>);
}

export default App;