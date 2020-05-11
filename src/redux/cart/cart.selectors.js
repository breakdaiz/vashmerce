import { createSelector } from 'reselect';

// input and output selector 


const selectCart = state => state.cart;

// input return a piece of the state
export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden
)

//  output selector 
export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.reduce((accumalatedQuantity, cartItems) => accumalatedQuantity  + cartItems.quantity, 0 )
)


// Total Price * quantity
export const selectCartTotal = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.reduce((accumalatedQuantity, cartItems) =>
   accumalatedQuantity  + cartItems.quantity * cartItems.price, 0)
)


