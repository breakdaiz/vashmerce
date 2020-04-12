import React, { Component } from 'react';
import './signin.styles.scss';

import FormInput from '../../components/formInput/FormInput';
import CustomButton from '../../components/custom-button/customButton';

import { auth, signinWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = async e => {
    e.preventDefault();
    const {email, password} = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({email:'', password: ''});  
    } catch (error) {
      console.log(error);
    }
  }

  handleChange = e => {
    const {name, value } = e.target;
    this.setState({[name]: value })

  }

  render() {
    return (
      <div className='sign-in'>
        <h2 className='title'> I already have an account</h2>
        <span> Sign in with your email and password</span>
          <form onSubmit={this.handleSubmit}> 
              <FormInput
                name="email" 
                type="email"
                value={this.state.email} 
                handleChange={this.handleChange}
                label='email'
                required 
              />
              <FormInput 
                type="password"
                name="password" 
                value={this.state.password} 
                handleChange={this.handleChange} 
                label='password'
                required
              />
              <div className='buttons'>
                <CustomButton type="submit">  Sign in </CustomButton>
                <CustomButton isGoogleSignIn onClick={signinWithGoogle}> {' '} Sign in with Google {' '} </CustomButton>
              </div>
          </form>
      </div>
    )
  }
}

export default SignIn
