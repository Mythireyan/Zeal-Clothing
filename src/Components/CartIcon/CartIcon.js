import React from 'react';

import './CartIcon.scss';
import {toggleClassHidden} from '../../Redux/Cart/CartAction';
import {connect} from 'react-redux';

import {ReactComponent as ShoppingIcon} from '../../Assets/shoppingBag.svg';

function CartIcon({toggleClassHidden}){
	return(
		<div className='cart-icon' onClick={toggleClassHidden}>
			<ShoppingIcon className='shopping-icon'/>
			<span className='item-count'>0</span>
		</div>
		)
}

const mapDispatchToProps = dispatch => ({
	toggleClassHidden:()=> dispatch(toggleClassHidden())
});

export default connect(
	null,
	mapDispatchToProps
	)(CartIcon);