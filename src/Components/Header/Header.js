import React from 'react';
import './Header.scss';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../Assets/crown.svg';
import {auth} from '../../Firebase/FirebaseUtility';
import {connect} from 'react-redux';
import CartIcon from '../CartIcon/CartIcon';
import CartDropdown from '../CartDropdown/CartDropdown';
import {createStructuredSelector} from 'reselect';
import {currentUserSelector} from '../../Redux/User/UserSelectors';
import {cartHiddenSelector} from '../../Redux/Cart/CartSelectors';

const Header = ({currentUser, hidden})=>(

		<div className='header'>
			<Link className='logo-container' to='/'>
				<Logo className='logo'/>
			</Link>
			<div className='options-container'>
				<Link className='option' to='/shop'>
					SHOP
				</Link>
				<Link className='option' to='shop'>
					CONTACT
				</Link>
				{
					currentUser ?
					<div onClick={()=> auth.signOut()}  className='option'>SignOut</div>
					:
					<Link className='option' to='/signIn'> SignIn </Link>
				}
				<CartIcon/>
			</div>
			{
			 	hidden ? null
				       : <CartDropdown/>
			}	
		</div>
	);

const mapStateToProps = createStructuredSelector({
	
	currentUser:currentUserSelector,
	hidden:cartHiddenSelector,	
}
);

export default connect(mapStateToProps)(Header);