import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Hero from '../components/Hero'
import About from '../components/About'
import Locations from '../components/Locations'
import Clients from '../components/Clients'
import Contact from '../components/Contact'


const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Agencia de locação</title>
        <meta name="description" content="Agencia de locacao" />
        <link rel="icon" href="/favicon.ico" />

        <title>Orange Martini</title>
        <meta name="title" content="Orange Martini"/>
        <meta name="description" content="Agencia de locação de imóveis"/>

        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://metatags.io/"/>
        <meta property="og:title" content="Orange Martini"/>
        <meta property="og:description" content="Agencia de locação de imóveis"/>
        <meta property="og:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"/>

        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content="https://metatags.io/"/>
        <meta property="twitter:title" content="Orange Martini"/>
        <meta property="twitter:description" content="Agencia de locação de imóveis"/>
        <meta property="twitter:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"></meta>
      </Head>

      <Hero />
      <About />
      <Locations />
      <Clients />
      <Contact />
    </div>
  )
}

export default Home
