import { createSelector } from 'reselect';

//INPUT
const userSelector = (state)=> state.user;

//OUTPUT
export const currentUserSelector = createSelector(
	[userSelector],
	(user)=> user.currentUser
);