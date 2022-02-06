import React from 'react';
import FeaturedCard from './FeaturedCard';

const FeaturedProducts = () => {
	return (
		<section className="w-full h-fit space-y-8 p-4">
			<h1 className="text-center font-bold text-4xl text-app-h1">Featured Products</h1>
			<div className="flex flex-col space-y-2 md:space-y-0 md:space-x-4 md:flex-row items-center justify-center md:w-full mx-auto">
				<FeaturedCard />
				<FeaturedCard />
				<FeaturedCard />
			</div>
			<div className="flex  justify-center space-x-2">
				<div className="w-5 h-1 cursor-pointer bg-app-btn-primary rounded-lg"></div>
				<div className="w-5 h-1 cursor-pointer bg-app-btn-primary rounded-lg"></div>
				<div className="w-5 h-1 cursor-pointer bg-app-btn-primary rounded-lg"></div>
				<div className="w-5 h-1 cursor-pointer bg-app-btn-primary rounded-lg"></div>
			</div>
		</section>
	);
};

export default FeaturedProducts;
