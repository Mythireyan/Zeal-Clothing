import React from 'react';

import {Route} from 'react-router-dom';
import CollectionPage from '../Collection/Collection';

import CollectionOverview from '../../Components/CollectionOverview/CollectionOverview';

const ShopPage = ({match}) => {
	return(
			<div className='shop__page'>
				<Route exact path={`${match.path}`} component={CollectionOverview}/>
				<Route path = {`${match.path}/:collectionId`} component={CollectionPage}/>
			</div>
		);		
}

export default ShopPage;