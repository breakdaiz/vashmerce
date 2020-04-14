import React, { Component } from 'react'
import './header.styles.scss'

import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';

// Firebase
import { auth } from '../../firebase/firebase.utils';

// Redux
import { connect } from 'react-redux';

// CartIcon
import CartIcon from '../../components/cart-icon/CartIcon';



class Header extends Component {

  
  // constructor(props) {
  //   super(props);
   
  // }
   
  render() {
    const {currentUser} = this.props;

    // console.log(currentUser)
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
        <CartIcon/>
        
      </div>
    </div> 
    )
  }
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Header);

