import type { GetServerSideProps } from 'next'
import nookies from 'nookies'
import Head from 'next/head'
import { DashboardScreen } from '../../screens'
import { User } from '../../data/model'
import useStoreReydrate from '../../hooks/useStoreReydrate'

type Props = {
  user: User
}

const Dashboard = ({ user }: Props) => {
  useStoreReydrate()
  return (
    <>
      <Head>
        <title>Dashboard Crypto</title>
      </Head>
      <DashboardScreen user={user} />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const cookies: any = nookies.get(context)
  const hasCookies = cookies['auth']

  if (!hasCookies) {
    return {
      redirect: {
        destination: '/',
      },
      props: {},
    }
  }
  const data = JSON.parse(hasCookies)
  return {
    props: {
      user: data.user,
    },
  }
}

export default Dashboard
