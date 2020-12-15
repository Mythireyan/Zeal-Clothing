import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectDirectorySections} from '../../Redux/Directory/DirectorySelectors';
import ContentBackground from '../ContentBackground/ContentBackground';
import './ContentContainer.scss';

const ContentContainer = ({sections})=>{
	return(
			<div className='content__container'>
			 	{sections.map(({title, id, imageUrl,size,linkUrl})=>(
			 			<ContentBackground title={title} key={id} imageUrl={imageUrl} size={size} linkUrl={linkUrl}/>
			 		))}
			 </div>
		);
	};

const mapStateToProps = createStructuredSelector({
	sections: selectDirectorySections
})

export default connect (mapStateToProps)(ContentContainer); 