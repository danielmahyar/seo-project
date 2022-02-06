import React from 'react';
import ReactStars from "react-rating-stars-component";
// Source: https://www.npmjs.com/package/react-rating-stars-component
const ProductDetails = () => {
	return (
		<section className="w-full bg-white flex items-center justify-center py-8">
			<article className="flex flex-col md:flex-row md:min-w-max w-full h-96 shadow-2xl ">
				<section className="w-full bg-black h-96">

				</section>
				<section className="w-full h-full flex flex-col justify-center space-y-2 px-5 py-10">
					<h1 className="text-3xl font-bold text-app-h1">Product Details</h1>
					<div className="flex flex-row items-center">
						<ReactStars 
						    count={5}
						    value={2}
						    edit={false}
						    size={24}
						    activeColor="#ffd700"
						/>
						<p>(22)</p>
					</div>

					<p className="font-bold text-app-h1">$32.00</p>
					<p className="text-gray-700">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus fugit ullam et reiciendis iusto rem, sit sint? Placeat maxime </p>
					<button className="px-4 py-2 bg-app-btn-primary w-32">Add To Cart</button>
					<p>Categories: Bam </p>
					<p>Tags: Bam </p>
					<p>Share: </p>
				</section>
			</article>
		</section>
	);
};

export default ProductDetails;
