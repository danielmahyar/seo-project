import Image from 'next/image';
import React from 'react';
import placeholder from '../public/assets/placeholder.svg'
const FeaturedProductsGridItem = () => {
	return (
		<article className="w-full bg-app-light-bg flex flex-col justify-center items-center">
			<header className="h-80 w-80 relative flex items-center justify-center">
				<Image layout="fill" objectFit="cover" className="flex-shrink-0" src={placeholder} />
			</header>
			<section className="w-full bg-white flex p-2 items-center justify-between">
				<p className="text-lg text-app-h1">Comfort Handy Chair</p>
				<div className="flex space-x-2 items-end">
					<p className="font-bold">$42.00</p>
					<p className="text-red-400 line-through text-sm">$42.00</p>
				</div>
			</section>
		</article>
	);
};

export default FeaturedProductsGridItem;
