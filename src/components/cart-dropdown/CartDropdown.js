import React from 'react';
import './cartdropdown.styles.scss';

// Router
import { withRouter } from 'react-router-dom';

// Redux
import {connect} from 'react-redux';

// Reselect
import { selectCartItems } from  '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';

import CartItem from '../cart-item/CartItem';
import CustomButton from '../custom-button/customButton';

import { toggleCartHidden } from '../../redux/cart/cart.actions';


const CartDropdown = ({cartItems, history, dispatch }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {
        cartItems.length ? ( cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        )))
       :
       (
       <span className='empty-message'> Your cart is empty </span>
       )}
    </div>
    <CustomButton onClick={() => { 
      history.push('/checkout'); 
      dispatch(toggleCartHidden());
      }}>GO TO CHECKOUT</CustomButton>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown)); 