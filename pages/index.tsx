import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import GlobalStyle from '../styles/global'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
const Home: NextPage = () => {
  return (
    <>
    <div>
      <Head>
        <title>Aerolab Challenge</title>
        <meta name="description" content="Challenge by Aerolab" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>
        <Hero/>
      </main>
      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
    <GlobalStyle/>
    </>
  )
}

export default Home
