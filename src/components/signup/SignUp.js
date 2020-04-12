import React, { Component } from 'react';
import FormInput from '../formInput/FormInput';
import CustomButton from '../../components/custom-button/customButton';

import { auth, createUserProfileDocument }  from '../../firebase/firebase.utils';
import './signup.styles.scss';


class SignUp extends Component {

  constructor(props) {
    super();

    this.state = {
      displayName: '',
      email: '', 
      password: '',
      confirmPassword: '',
    }
  }

// Handle Change
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  // Handle submit
  handleSubmit = async e => {
    e.preventDefault();

    const { displayName, email, password, confirmPassword} = this.state;

    if (password !== confirmPassword) {
      alert("passwords don't match")
      return;

    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);
      await createUserProfileDocument(user, {displayName});
      this.setState({
        displayName: '',
        email: '', 
        password: '',
        confirmPassword: '',
      }, ()=> { 
        console.log(this.state);
      });
      
    } catch (error) {
      console.log(error);  
    }
  };



  render() {
    const {displayName, email, password, confirmPassword} = this.state;

    return (
      <div className='sign-up'>
        <h2 className='title'> I do not have an account</h2>
        <span> Sign up with your email and password</span>
          <form className='sign-up-form' onSubmit={this.handleSubmit}>
              <FormInput
                type='text'
                name='displayName'
                value={displayName}
                label='Display Name'
                onChange={this.handleChange}
              />
              <FormInput
                type='email'
                name='email'
                value={email}
                label='Email'
                onChange={this.handleChange}
              />
              <FormInput
                type='password'
                name='password'
                value={password}
                label='Password'
                onChange={this.handleChange}
              />
              <FormInput
                type='password'
                name='confirmPassword'
                value={confirmPassword}
                label='Confirm Password'
                onChange={this.handleChange}
              />
            <CustomButton type='submit'>SIGN UP</CustomButton>

          </form>        
      </div>
    );
  }
}

export default SignUp;