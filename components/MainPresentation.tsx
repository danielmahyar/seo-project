import Image from 'next/image';
import React from 'react';
import sofa from '../public/assets/sofa-header.svg'
const MainPresentation = () => {
	return (
		<section className="w-full h-auto bg-app-main-bg relative md:flex py-16">
			<article className="w-full flex ">
				<div className="hidden w-1/2 xl:flex items-start justify-end">
					<img className="absolute top-0" src="/assets/lamp-header.svg" />
				</div>
				<div className="flex flex-col px-5 justify-center w-full h-full space-y-5 z-10">
					<p className="text-app-btn-primary">Best Furniture For Your Castle...</p>
					<h1 className="text-app-h1 text-6xl font-bold">New Furniture Collection <br /> Trends in 2022</h1>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, neque! Architecto qui  sint earum do</p>
					<button className="py-4 text-white rounded font-bold px-8 bg-app-btn-primary w-40 opacity-100 transition-all ease-in-out hover:opacity-70">Sign Now</button>
				</div>
			</article>
			<article className="w-full xl:w-1/2 hidden md:flex items-center justify-center xl:pr-20">
				<Image src={sofa} alt="An SVG of a sofa" priority />
			</article>
		</section>
	);
};

export default MainPresentation;
