import React, { Component } from 'react'
import './header.styles.scss'

import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';

// Firebase
import { auth } from '../../firebase/firebase.utils';


class Header extends Component {

  
  // constructor(props) {
  //   super(props);
   
  // }
   
  render() {
    const {currentUser} = this.props;

    console.log(currentUser)
    return (
    <div className='header'>
        <Link className='logo-container' to='/'>
          <Logo className='logo'/>
        </Link>
  
      <div className='options'>
        <Link className='option' to='/shop'>
          SHOP
        </Link>
        <Link className='option' to='/shop'>
          CONTACT
        </Link>
        {
          currentUser ? (
          <div className='option' onClick={()=> { auth.signOut()}}>
             SIGN OUT
          </div>) : (
          <Link className='option' to='/signin'>
             SIGN IN
          </Link>
          )
          
        }
        
      </div>
    </div> 
    )
  }
}

export default Header
