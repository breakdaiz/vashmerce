import React, { Component } from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';

import Homepage from './pages/homepage/Homepage';
import ShopPage from './pages/shoppage/ShopPage';
import Header from './components/header/Header';
import SignInSignup from './pages/signin-signup/SignInSignup'

import { auth, createUserProfileDocument } from '../src/firebase/firebase.utils.js';

// Redux
import {connect} from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';

class App extends Component {
  
  unsubscribeFromAuth = null;
  
  componentDidMount() {
    const { setCurrentUser, currentUser }  = this.props;
    
   this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => { 

     if (userAuth) {
      const userRef = await createUserProfileDocument(userAuth);

      userRef.onSnapshot(snapshot => {
       setCurrentUser({
          id: snapshot.id,
          ...snapshot.data()
        });
      });
     }
     else {
      setCurrentUser(userAuth);
     }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path="/" component={Homepage}/>
          <Route exact path="/shop" component={ShopPage}/>
          <Route exact path='/signin' render={() => this.props.currentUser ?  (<Redirect to='/' />) : (<SignInSignup/>)}/> 
          
        </Switch> 
      </div>);

  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))  
})

export default connect(mapStateToProps, mapDispatchToProps)(App);