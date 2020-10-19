import React from 'react';
import './SignIn-SignUp-Page.scss';
import SignIn from '../../Components/SignIn/SignIn';
import SignUp from '../../Components/SignUp/SignUp';

function SignInSignUpPage(){
	return(
		<div className='signIn-signUp-page'>
			  <SignIn/>
			  <SignUp/> 
		</div>
	)
}

export default SignInSignUpPage;