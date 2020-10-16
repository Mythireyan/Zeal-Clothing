import React from 'react';
import './Header.scss';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../Assets/crown.svg';
import {auth} from '../../Firebase/FirebaseUtility';

const Header = ({currentUser})=>(

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
			</div>
		</div>
	)

export default Header;