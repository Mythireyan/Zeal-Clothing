import React from 'react';

import './FormInput.scss';

function FormInput({label, onChange,value,...otherProps}){
	return(
		<div className='group'>
			<input className='form-input' onChange={onChange} {...otherProps}/>
			{
				label?
				(<label className={`${value.length ? 'shrink' : ''}form-input-label`}>
					{label}
				</label>)
				:null
			}
		</div>
		)
}

export default FormInput;