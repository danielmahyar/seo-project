import React from 'react';
import delivery from '../public/assets/free-delivery.svg'
import premium from '../public/assets/premium-quality.svg'
import support from '../public/assets/24-hours-support.svg'
import cashback from '../public/assets/cashback.svg'
import OfferCard from './OfferCard';
const Offers = () => {
	return (
		<section className="w-full space-y-4 px-5">
			<h1 className="text-center font-bold text-4xl text-app-h1">What Shopex Offers</h1>

			<section className="w-full grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:flex items-center justify-center place-items-center"> 
				<OfferCard title="Free Delivery" img={delivery} description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est, aut debitis consequatur voluptate iusto, laboriosam nulla soluta officiis" />
				<OfferCard title="Free Delivery" img={premium} description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est, aut debitis consequatur voluptate iusto, laboriosam nulla soluta officiis" />
				<OfferCard title="Free Delivery" img={support} description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est, aut debitis consequatur voluptate iusto, laboriosam nulla soluta officiis" />
				<OfferCard title="Free Delivery" img={cashback} description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est, aut debitis consequatur voluptate iusto, laboriosam nulla soluta officiis" />
			</section>
		</section>
	);
};

export default Offers;
