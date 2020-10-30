import { createSelector } from 'reselect';

//INPUT SELECTOR
const cartSelector = (state)=> state.cart;

//OUTPUT SELECTORS
export const cartItemsSelector = createSelector(
	[cartSelector],
	(cart)=> cart.cartItems
	)

export const selectCartItemsCount = createSelector(
	[cartItemsSelector],
	(cartItems)=>
			cartItems.reduce((accumulator,cartItem)=>(
			accumulator + cartItem.quantity
		),0)
	)

export const selectCartTotal = createSelector(
	[cartItemsSelector],
	(cartItems)=>
			cartItems.reduce((accumulator,cartItem)=>(
			accumulator + cartItem.quantity * cartItem.price
		),0)
	)

export const cartHiddenSelector = createSelector(
	[cartSelector],
	(cart)=> cart.hidden
	)
