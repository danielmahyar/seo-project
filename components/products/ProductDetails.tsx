import Image from 'next/image';
import React from 'react';
import ReactStars from "react-rating-stars-component";
import placeholder from '../../public/assets/placeholder.svg'
import { ReactPhotoCollage } from '../collage';
// Source: https://www.npmjs.com/package/react-rating-stars-component

const ProductDetails = () => {

	const setting = {
		width: "250px",
		height: ["150px", "250px"],
		layout: [1, 1, 1],
		photos: [
			{
				source:
					"https://images.unsplash.com/photo-1517088455889-bfa75135412c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e5548929376f93d8b1b7a21097df03bd&auto=format&fit=crop&w=749&q=80"
			},
			{
				source:
					"/assets/placeholder.svg"
			},
			{
				source:
					"https://images.unsplash.com/photo-1521024221340-efe7d7fa239b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9ad8a99d809d3fa3a9e8dff3ecc81878&auto=format&fit=crop&w=750&q=80"
			},
			{
				source:
					"https://images.unsplash.com/photo-1523038793606-2fd28f837a85?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=919b76f4229e41416653aeb10e84e94a&auto=format&fit=crop&w=334&q=80"
			},
			{
				source:
					"https://images.unsplash.com/photo-1516832970803-325be7a92aa5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=93d7ac9abad6167aecb49ebd67fd5b6d&auto=format&fit=crop&w=751&q=80"
			},
			{
				source:
					"https://images.unsplash.com/photo-1526938972776-11558ad4de30?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=973795a277e861265b0fabbf4a96afe2&auto=format&fit=crop&w=750&q=80"
			},
			{
				source:
					"https://images.unsplash.com/photo-1464550838636-1a3496df938b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f22dbf6c13ea7c21e803aa721437b691&auto=format&fit=crop&w=888&q=80"
			}
		],
		showNumOfRemainingPhotos: true
	};

	return (
		<section className="w-full bg-white flex items-center justify-center py-8">
			<article className="flex flex-col md:flex-row lg:w-4/6 w-full shadow-2xl p-4">
				<section className="w-full flex">
					<ReactPhotoCollage {...setting}/>
					<Image className="w-full" src={placeholder}/>
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
