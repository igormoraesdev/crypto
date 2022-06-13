import type { NextPage } from 'next'
import Head from 'next/head'
import useStoreReydrate from '../hooks/useStoreReydrate'
import { HomeScreen } from '../screens'

const Home: NextPage = () => {
  useStoreReydrate()

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
