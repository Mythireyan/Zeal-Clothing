import React from 'react';
import {withRouter} from 'react-router-dom';

import './ContentBackground.scss';

function ContentBackground({title, imageUrl, size, history, linkUrl, match}){
	return(
			 	<div className={`${size} content__background`} onClick={()=> history.push(`${match.url}${linkUrl}`)}>   
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

export default withRouter(ContentBackground);