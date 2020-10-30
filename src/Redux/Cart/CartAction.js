import {CartActionTypes} from './CartTypes';

export const toggleClassHidden = ()=>({
	type:CartActionTypes.TOGGLE_CART_HIDDEN,
})

export const addItem = (item)=>{
	return{
		type:CartActionTypes.ADD_ITEM,
		payload:item,
	}
}

export const removeCartItem = (item)=>{
	return{
		type:CartActionTypes.REMOVE_CART_ITEM,
		payload:item,
	}
}

export const decreaseItem = (item)=>{
	return{
		type:CartActionTypes.DECREASE_ITEM,
		payload:item,
	}
}