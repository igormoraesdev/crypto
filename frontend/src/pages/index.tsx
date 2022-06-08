import type { NextPage } from 'next'
import Head from 'next/head'
import { HomeScreen } from '../screens'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Crypto</title>
      </Head>
      <HomeScreen />
    </>
  )
}

export default Home
