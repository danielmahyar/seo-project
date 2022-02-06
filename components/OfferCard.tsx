import Image from 'next/image';
import React from 'react';


const OfferCard = ({ img, description, title }: { img: any, description: string, title: string }) => {
	return (
		<article className="w-80 h-96 space-y-3 p-10 overflow-hidden shadow-xl">
			<header className="flex items-center justify-center flex-shrink-0">
				<Image src={img} width={150} height={150}/>
			</header>
			<section className="w-full">
				<h1 className="text-app-h1 text-xl text-center font-semibold">{title}</h1>
				<p className="text-gray-600 text-center">{description}</p>
			</section>
		</article>
	);
};

export default OfferCard;
