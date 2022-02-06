import Image from 'next/image';
import React from 'react';
import specialSofa from '../public/assets/special-sofa.svg'

const SpecialSection = () => {
	return (
		<section className="w-full flex flex-col md:flex-row items-center justify-center bg-app-main-bg md:py-10 lg:py-0">
			<div className="w-full flex items-center justify-center md:justify-end ">
				<Image src={specialSofa} />
			</div>
			<div className="w-full space-y-8 p-4 flex flex-col justify-center items-center md:items-start">
				<h1 className="text-app-h1 text-4xl text-center md:text-left font-bold">Unique Features Of latest & <br /> Trending Products</h1>
				<div className="flex flex-col xl:w-2/3">
					<div className="flex items-center space-x-2">
						<div className="w-2 h-2 rounded-full bg-app-btn-primary flex-shrink-0" />
						<p className="text-gray-700">All frames constructed with hardwood solids and laminates</p>
					</div>
					<div className="flex items-center space-x-2">
						<div className="w-2 h-2 rounded-full bg-blue-700 flex-shrink-0" />
						<p className="text-gray-700">Reinforced with double wood dowels, glue, screw - nails corner blocks and machine nails</p>
					</div>
					<div className="flex items-center space-x-2">
						<div className="w-2 h-2 rounded-full bg-green-700 flex-shrink-0" />
						<p className="text-gray-700">Arms, backs and seats are structurally reinforced</p>
					</div>
				</div>
				<div className="flex items-start space-x-4">
					<button className="py-4 text-white rounded font-bold px-8 bg-app-btn-primary w-40 opacity-100 transition-all ease-in-out hover:opacity-70">Add To Cart</button>
					<div className="flex flex-col">
						<p className="text-app-h1 font-semibold">B&B Italian Sofa</p>
						<p className="text-app-h1">$32.00</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SpecialSection;
