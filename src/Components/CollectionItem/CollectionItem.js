import React from 'react';

import{connect} from 'react-redux';
import {addItem} from '../../Redux/Cart/CartAction';
import './CollectionItem.scss';
import CustomButton from '../CustomButton/CustomButton';

function CollectionItem ({item, addItem}){
	const {id, name , imageUrl, price} = item;
	return(
		<div className='collection-item'>
			<div className='image'
					style={{
						backgroundImage:`url(${imageUrl})`
					}}/>
			<div className='collection-footer'>
				<span className='name'>{name}</span>
				<span className='price'>{price}</span>
			</div>
			<CustomButton onClick={()=>addItem(item)} inverted>Add to cart</CustomButton>
		</div>
		)
}

const mapDispatchToProps = dispatch =>({
	addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);