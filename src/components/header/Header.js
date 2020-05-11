import React, { Component } from 'react'
import './header.styles.scss'

import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';

// Firebase
import { auth } from '../../firebase/firebase.utils';

// Redux
import { connect } from 'react-redux';
// Selector
import { createStructuredSelector } from 'reselect';

// CartIcon
import CartIcon from '../../components/cart-icon/CartIcon';
import CartDropdown from '../../components/cart-dropdown/CartDropdown';

import { selectCurrentUser } from '../../redux/user/user.selector';
import { selectCartHidden } from '../../redux/cart/cart.selectors';


class Header extends Component {

  render() {
    const {currentUser, hidden } = this.props;

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
      { hidden ? null :  <CartDropdown/> }
    </div> 
    )
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);

