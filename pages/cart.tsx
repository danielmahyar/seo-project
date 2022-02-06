import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import CartHeader from '../components/cart/CartHeader';
import ProductsCartSection from '../components/cart/ProductsCartSection';
import Footer from '../components/Footer';
import Header from '../components/Header';

const ShoppingCartPage: NextPage = () => {
  const router = useRouter()
  const products = []




  return (
    <>
      <Head>
        <title>Shopping Cart</title>
      </Head>

      <Header />

      <main className="w-full">
        <CartHeader />

        <ProductsCartSection products={products}/>

      </main>

      <Footer />
    </>
  );
};

export default ShoppingCartPage;
