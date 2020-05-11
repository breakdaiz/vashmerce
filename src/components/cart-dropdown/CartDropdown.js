import React from 'react';
import './cartdropdown.styles.scss';
import {connect} from 'react-redux';

import  CartItem from '../cart-item/CartItem';
import { selectCartItems } from  '../../redux/cart/cart.selectors';

import CustomButton from '../custom-button/customButton';


const CartDropdown = ({cartItems}) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {cartItems.map(cartItem => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>

    <CustomButton >GO TO CHECKOUT</CustomButton>
  </div>
);

const mapStateToProps = state => ({
  cartItems: selectCartItems(state)
});

export default connect(mapStateToProps)(CartDropdown); 