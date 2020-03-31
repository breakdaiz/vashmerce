import React, { Component } from 'react';
import './signin-signup.styles.scss';

import SignIn from '../../components/signin/SignIn'

class SignInSignup extends Component {

  render() {
    return (
      <div className='signin-signup'>
      <SignIn/>
      </div>
    )
  }
}

export default SignInSignup
