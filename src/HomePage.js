import React from 'react';
import './HomePage.scss';

function HomePage(){
	return(
		<div className='homepage__container'>
			<div className = 'content__container'>
				<div className='content__background'>
					<div className='content__box'>
						<div className='content__title'>
							<h2 className='content__title--genere'>Hats</h2>
							<span className='content__title--shop'>SHOP NOW</span>
						</div>
					</div>
				</div>
			
			
				<div className='content__background'>
					<div className='content__box'>
						<div className='content__title'>
							<h2 className='content__title--genere'>Jackets</h2>
							<span className='content__title--shop'>SHOP NOW</span>
						</div>
					</div>
				</div>
			
			
				<div className='content__background'>
					<div className='content__box'>
						<div className='content__title'>
							<h2 className='content__title--genere'>Sneakers</h2>
							<span className='content__title--shop'>SHOP NOW</span>
						</div>
					</div>
				</div>
			
			
				<div className='content__background'>
					<div className='content__box'>
						<div className='content__title'>
							<h2 className='content__title--genere'>Women Fashion</h2>
							<span className='content__title--shop'>SHOP NOW</span>
						</div>
					</div>
				</div>
			
			
				<div className='content__background'>
					<div className='content__box'>
						<div className='content__title'>
							<h2 className='content__title--genere'>Mens Fashion</h2>
							<span className='content__title--shop'>SHOP NOW</span>
						</div>
					</div>
				</div>
			</div>
		</div>
		)
}

export default HomePage;