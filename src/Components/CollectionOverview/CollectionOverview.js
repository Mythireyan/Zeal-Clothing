import React from 'react';
import {connect} from 'react-redux';
import CollectionPreview from '../CollectionPreview/CollectionPreview';

import {createStructuredSelector} from 'reselect';
import {selectCollectionsForPreview} from '../../Redux/Shop/ShopSelectors';

import './CollectionOverview.scss';

const CollectionOverview = ({ collections }) => (
			<div className='collections-overview'>
				{collections.map(({id, ...otherCollectionProps}) => (
						<CollectionPreview key={id} {...otherCollectionProps}/>
				))}
			</div>
		);

const mapStateToProps = createStructuredSelector({
	collections:selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionOverview);


