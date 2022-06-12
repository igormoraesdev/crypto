import type { NextPage } from 'next'
import Head from 'next/head'
import { DashboardScreen } from '../../screens'

const Dashboard: NextPage = () => {
  return (
    <>
      <Head>
        <title>Dashboard Crypto</title>
      </Head>
      <DashboardScreen />
    </>
  )
}

export default Dashboard
