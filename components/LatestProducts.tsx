import React from 'react';
import FeaturedProductsGridItem from './FeaturedProductsGridItem';

const LatestProducts = () => {
	return (
		<section className="w-full h-auto space-y-6 lg:px-44">
			<h1 className="text-center font-bold text-4xl text-app-h1">Latest Products</h1>
			<nav className="w-full">
				<ul className="flex flex-col md:flex-row w-full items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
					<li className="font-semibold cursor-pointer underline text-app-btn-primary">New Arrival</li>
					<li className="font-semibold cursor-pointer text-app-h1">Best Seller</li>
					<li className="font-semibold cursor-pointer text-app-h1">Featured</li>
					<li className="font-semibold cursor-pointer text-app-h1">Special Offer</li>
				</ul>
			</nav>
			<section className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 p-4">
				<FeaturedProductsGridItem />
				<FeaturedProductsGridItem />
				<FeaturedProductsGridItem />
				<FeaturedProductsGridItem />
				<FeaturedProductsGridItem />
				<FeaturedProductsGridItem />
			</section>
		</section>
	);
};

export default LatestProducts;
