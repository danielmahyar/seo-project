import React from 'react';

const CartHeader = () => {
	return (
		<section className="w-full bg-app-light-bg">
			<article className="lg:w-4/6 mx-auto py-32 px-5 lg:px-0">
				<h1 className="text-4xl font-bold text-app-h1">Shopping Cart</h1>
				<div className="flex space-x-4">
					<p>Home</p>
					<p>Pages</p>
					<p>Product Details</p>
				</div>
			</article>
		</section>
	);
};

export default CartHeader;
