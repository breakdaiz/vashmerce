import React, { Component } from 'react';
import './signin-signup.styles.scss';

import SignIn from '../../components/signin/SignIn';
import SignUp from '../../components/signup/SignUp';

class SignInSignup extends Component {

  render() {
    return (
      <div className='signin-signup'>
      <SignIn/>
      <SignUp/>
      </div>
    )
  }
}

export default SignInSignup
