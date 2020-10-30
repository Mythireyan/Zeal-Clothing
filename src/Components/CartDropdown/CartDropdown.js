import React from 'react';
import {connect} from 'react-redux';
import './CartDropdown.scss';
import {cartItemsSelector} from '../../Redux/Cart/CartSelectors';
import {createStructuredSelector} from 'reselect';
import {withRouter} from 'react-router-dom';
import {toggleClassHidden} from '../../Redux/Cart/CartAction';

import CartItem from '../CartItem/CartItem';

import CustomButton from '../CustomButton/CustomButton';

function CartDropdown({cartItems, history, dispatch}){
	return(
		<div className='cart-dropdown'>
			<div className='cart-items'>
				{cartItems.length ? (
					cartItems.map(cartItem =>(<CartItem key={cartItem.id} item={cartItem}/>))
					):(<span className='empty-message'>
						<span className='empty-message-content'>your Cart is empty</span>
					  	<span className='empty-message-emoji'>☹</span>	
					</span>)
						
				}	
			</div>
				<CustomButton onClick={()=> {
					history.push('/checkout') 
					dispatch(toggleClassHidden())
				}} 
			>GO TO CHECKOUT</CustomButton>
		</div>
		)
};

const mapStateToProps = createStructuredSelector({
	cartItems:cartItemsSelector
});

export default withRouter(connect(mapStateToProps)(CartDropdown));