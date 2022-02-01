import type { NextPage } from 'next'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import GlobalStyle from '../styles/global'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Products from '../components/Products'

export interface ProductInterface {
  img: {
    url: string;
    hdUrl: string;
  }
  _id: string;
  name: string;
  cost: number;
  category: string;
}


export const getServerSideProps: GetServerSideProps = async () => {
  const token = process.env.token
  const response = await fetch(`https://coding-challenge-api.aerolab.co/products?token=${token}`)
  const data = await response.json()
  return {
    props: {
      products: data
    }
  }
}

export default function Home ({ products }: { products: [ProductInterface] }): JSX.Element{
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
        <Products products={products}/>
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



