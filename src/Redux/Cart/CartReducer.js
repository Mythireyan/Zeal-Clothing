import {CartActionTypes} from './CartTypes';
import{addItemToCart} from './CartUtils';
import {decreaseItemFromCart} from './CartUtils';

const INITIAL_STATE = {
	hidden:true,
	cartItems:[],
}

const CartReducer = (state= INITIAL_STATE, action) =>{
	switch(action.type){
		case CartActionTypes.TOGGLE_CART_HIDDEN:
		return{
			...state,
			hidden:!state.hidden,
		}
		case CartActionTypes.ADD_ITEM:
		return{
			...state,
			cartItems:addItemToCart(state.cartItems, action.payload)
		}
		case CartActionTypes.REMOVE_CART_ITEM:
		return{
			...state,
			cartItems:state.cartItems.filter(cartItem=> 
				cartItem.id !== action.payload.id
				)
		}
		case CartActionTypes.DECREASE_ITEM:
		return{
			...state,
			cartItems:decreaseItemFromCart(state.cartItems, action.payload)
		}
		default:
		return state;
	}
} 

export default CartReducer;