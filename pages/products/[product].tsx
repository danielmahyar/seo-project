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
				<meta name="description" content="Come and get the cheapest and most effective products" />

				<meta property="og:type" content="website" />

				<meta property="og:title" content={`${product}`} />

				<meta property="og:description" content={`Specific item: ${product}`} />

				<meta property="og:image" content="https://m.media-amazon.com/images/I/41tCIsGV8UL.jpg" />

				<meta property="og:url" content="PERMALINK" />

				<meta property="og:site_name" content="SITE NAME" />

				<meta name="twitter:title" content="TITLE OF POST OR PAGE" />

				<meta name="twitter:description" content="DESCRIPTION OF PAGE CONTENT" />

				<meta name="twitter:image" content="LINK TO IMAGE" />

				<meta name="twitter:site" content="@USERNAME" />

				<meta name="twitter:creator" content="@USERNAME" />

				<link rel="icon" href="favicon.ico" />
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
