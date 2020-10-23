import React from 'react';

import './CartIcon.scss';
import {toggleClassHidden} from '../../Redux/Cart/CartAction';
import {connect} from 'react-redux';
import {selectCartItemsCount} from '../../Redux/Cart/CartSelectors';

import {ReactComponent as ShoppingIcon} from '../../Assets/shoppingBag.svg';

function CartIcon({toggleClassHidden, itemCount}){
	return(
		<div className='cart-icon' onClick={toggleClassHidden}>
			<ShoppingIcon className='shopping-icon'/>
			<span className='item-count'>{itemCount}</span>
		</div>
		)
}

const mapStateToProps= (state)=>{
	return{
		itemCount:selectCartItemsCount(state)
	}
}

const mapDispatchToProps = dispatch => ({
	toggleClassHidden:()=> dispatch(toggleClassHidden())
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
	)(CartIcon);