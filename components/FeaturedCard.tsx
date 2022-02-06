import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import placeholder from '../public/assets/placeholder.svg'

const FeaturedCard = () => {
	const router = useRouter()

	const handleSeeProduct = () => {
		router.push("/products/123123123")
	}

	return (
		<article onClick={handleSeeProduct} className="w-full cursor-pointer md:w-80 h-auto flex flex-col md:shadow-xl group transition-all outline outline-1 outline-transparent hover:outline-app-btn-primary ">
			<header className="w-full bg-app-light-bg flex items-center py-10 justify-center h-full flex-shrink-0">
				<Image className="transition-all transform scale-100 ease-in-out group-hover:scale-110" src={placeholder} width={250} height={250} alt="Image of featured products"/>
			</header>

			<section className="w-full h-full bg-white p-4 space-y-2">
				<h2 className="text-xl text-center font-bold text-app-btn-primary transform transition-all scale-100 group-hover:scale-105">Cantilever Chair</h2>
				<div className="flex  justify-center space-x-2">
					<div className="w-4 h-1 cursor-pointer bg-green-700 rounded-lg"></div>
					<div className="w-4 h-1 cursor-pointer bg-app-btn-primary rounded-lg"></div>
					<div style={{ background: "#00009D" }} className="w-4 h-1 cursor-pointer bg-app-btn-primary rounded-lg"></div>
				</div>
				<p className="font-semibold text-center text-app-text-secondary">$42.00</p>
			</section>
		</article>
	);
};

export default FeaturedCard;
