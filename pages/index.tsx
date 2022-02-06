import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import FeaturedProducts from '../components/FeaturedProducts'
import Footer from '../components/Footer'
import Header from '../components/Header'
import LatestProducts from '../components/LatestProducts'
import MainPresentation from '../components/MainPresentation'
import Offers from '../components/Offers'
import SpecialSection from '../components/SpecialSection'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>VoClothes</title>
        <meta name="description" content="Come and get the cheapest and most effective products" />

        <meta property="og:type" content="website" />

        <meta property="og:title" content="VoFur" />

        <meta property="og:description" content="Furniture from Vocast Production" />

        <meta property="og:image" content="LINK TO THE IMAGE FILE" />

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

      <main className="w-full space-y-12">

        <MainPresentation />

        <FeaturedProducts />

        <LatestProducts />

        <Offers />

        <SpecialSection />

        <Footer />

      </main>
    </>

  )
}
export default Home
