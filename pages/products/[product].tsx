import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import Header from '../../components/Header';
import ProductDetailHeader from '../../components/products/ProductDetailHeader';
import ProductDetails from '../../components/products/ProductDetails';

const ProductScreen = () => {
	const router = useRouter()
	const { product } = router.query
	return (
		<>
			<Head>
				<title>{product}</title>
			</Head>
			<Header />
			<main className="w-full h-full  space-y-8">


				<ProductDetailHeader />

				<ProductDetails />

				<p>{product}</p>
			</main>
		</>
	);
};

export default ProductScreen;
