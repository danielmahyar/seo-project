import React from 'react';

const Footer = () => {
	return (
		<footer className="w-full flex flex-col bg-app-main-bg">
			<section className="w-full flex-1 px-4 grid gap-16 grid-rows-1  grid-cols-1 md:grid-cols-2 xl:grid-cols-4 lg:w-10/12 mx-auto py-24">
				<div className="space-y-2">
					<h1 className="text-2xl font-bold">Hekto</h1>
					<div className="flex flex-shrink-0">
						<input placeholder="Enter Email Adress" type="email" className="px-2 outline-none border-none w-44 flex-shrink-0 rounded-l"/>
						<button className="py-3  px-4 bg-app-btn-primary text-white rounded-r">Sign Up</button>
					</div>
					<p>Contact Info</p>
					<p>Some Adress</p>
				</div>
				<div className="space-y-2">
					<h1 className="font-bold text-black mb-4">Categories</h1>
					<p className="text-gray-700">Terms And Service</p>
					<p className="text-gray-700">Terms And Service</p>
					<p className="text-gray-700">Terms And Service</p>
					<p className="text-gray-700">Terms And Service</p>
				</div>
				<div className="space-y-2">
					<h1 className="font-bold text-black mb-4">Customer Care</h1>
					<p className="text-gray-700">Terms And Service</p>
					<p className="text-gray-700">Terms And Service</p>
					<p className="text-gray-700">Terms And Service</p>
					<p className="text-gray-700">Terms And Service</p>
				</div>
				<div className="space-y-2">
					<h1 className="font-bold text-black mb-4">Pages</h1>
					<p className="text-gray-700">Terms And Service</p>
					<p className="text-gray-700">Terms And Service</p>
					<p className="text-gray-700">Terms And Service</p>
					<p className="text-gray-700">Terms And Service</p>
				</div>
			</section>
			<section className="bg-app-secondary-bg h-10 ">

			</section>
		</footer>
	);
};

export default Footer;
