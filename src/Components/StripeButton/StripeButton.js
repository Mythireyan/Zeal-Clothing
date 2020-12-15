import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
	const priceForStripe = price * 100;
	const publishableKey = "pk_test_51HyXpRAq0ByHLlfVx4M8L9u73oDBR3WXrdlztTeaaCIL9B37EKGxBmMAgnuXtihHk4gyYw4IDNQdDDV1YzBB5PIK00gMvYG9nT";

	const onToken = token => {
		console.log(token);
		alert("Payment Successful");
	}

	return(
		<StripeCheckout
			label='Pay Now'
			name='ZEAL Clothing Ltd.'
			billingAddress
			shippingAddress
			image = 'https://svgshare.com/i/CUz.svg'
			description = {`Your Total Is ${price}`}
			amount = {priceForStripe}
			panelLabel = 'Pay Now'
			token = {onToken}
			stripeKey ={publishableKey}
			currency ="USD"
		/>
		)
}

export default StripeCheckoutButton;