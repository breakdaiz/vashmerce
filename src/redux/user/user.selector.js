import { createSelector } from 'reselect';

// usually filename is select+statename
const selectUser = state => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.currentUser
);



