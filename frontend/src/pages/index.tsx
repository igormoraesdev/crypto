import type { NextPage } from 'next'
import Head from 'next/head'
import { HomeScreen } from '../screens'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Crypto</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeScreen />
    </>
  )
}

export default Home
