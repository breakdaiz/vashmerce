import { createSelector } from 'reselect';

// input and output selector 


const selectCart = state => state.cart;

// input return a piece of the state
export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

//  output selector 
export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce((accumalatedQuantity, cartItems) => accumalatedQuantity  + cartItems.quantity, 0 )
)




