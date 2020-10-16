import React from 'react';
import './SignIn.scss';
import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';
import {signInWithGoogle} from '../../Firebase/FirebaseUtility';

class SignIn extends  React.Component{
	constructor(props){
		super(props);

		this.state={
			email:'',
			password:'',
		}
	}

	handleSubmit=(e)=>{
		e.preventDefault();
		this.setState({email:'', password:''})
	} 

	handleChange=(e)=>{
		// console.log(e.target.value);
		const {name, value} = e.target;
		this.setState({[name]: value})
	}

	render(){
		return(
			<div className='signIn'>
				<h2 className='title'>I already have an account</h2>
				<span>Signin with email and password</span>

				<form onSubmit={this.handleSubmit}>
					
					<FormInput 
					onChange={this.handleChange} 
					type="email" 
					name='email' 
					value={this.state.email} 
					label='Email' 
					required/>
					<FormInput 
					onChange={this.handleChange} 
					type="password" 
					name='password' 
					value={this.state.password} 
					label='Password' 
					required/>
					<div className='buttons'>
						<CustomButton type='submit' value='submit form'>Sign In </CustomButton>
						<CustomButton isGoogleSignIn={true} onClick={signInWithGoogle}>Sign In With Google</CustomButton>
					</div>
					
				</form>
			</div>
			)
	}
}

export default SignIn;