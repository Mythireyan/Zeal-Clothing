import React from 'react';

import './ContentBackground.scss';

function ContentBackground({title, imageUrl, size}){
	return(
				<div className={`${size} content__background`}>   
					<div className= 'backgroundImage' style ={{
						backgroundImage:`url(${imageUrl})`
					}}/>
					
						<div className='content__title'>
							<h2 className='content__title--genere'>{title}</h2>
							<span className='content__title--shop'>SHOP NOW</span>
					</div>
				</div>			
		)
}

export default ContentBackground;