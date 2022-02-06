import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import vectorgraph from '../public/assets/404g.svg'

const Page404: NextPage = () => {
	const router = useRouter()

	const handleBackHome = () => {
		router.replace("/")
	}

	return (
		<>
			<Head>
				<title>Not Found</title>
			</Head>

			<Header />
			<main className="w-full">
				<section className="w-full bg-app-light-bg">
					<article className="w-4/6 mx-auto py-20">
						<h1 className="text-4xl font-bold text-app-h1">404 Not Found</h1>
						<div className="flex space-x-4">
							<p>Home</p>
							<p>Pages</p>
							<p className="text-app-btn-primary">404 Page Not Found</p>
						</div>
					</article>
				</section>
				<section className="w-full flex flex-col items-center justify-center">
					<Image src={vectorgraph} />
					<button onClick={handleBackHome} className="px-5 py-3 bg-app-btn-primary text-white rounded text-center">Back To Home</button>
				</section>
			</main>

			<Footer />
		</>
	);
};

export default Page404;
