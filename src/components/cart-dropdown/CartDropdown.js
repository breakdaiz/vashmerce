import React from 'react';
import './cartdropdown.styles.scss';

import CustomButton from '../custom-button/customButton';


const CartDropdown = () => (
  <div className='cart-dropdown'>
    <div className='cart-itemms'/>
    <CustomButton >GO TO CHECKOUT</CustomButton>
  </div>
);


export default CartDropdown; 