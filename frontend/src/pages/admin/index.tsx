import { GetServerSideProps } from 'next'
import nookies from 'nookies'
import Head from 'next/head'
import { AdminScreen } from '../../screens'
import useStoreReydrate from '../../hooks/useStoreReydrate'

const Admin = () => {
  useStoreReydrate()
  return (
    <>
      <Head>
        <title>Admin Crypto</title>
      </Head>
      <AdminScreen />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const cookies: any = nookies.get(context)
  const hasCookies = cookies['auth']

  if (hasCookies) {
    const dataUser = JSON.parse(hasCookies)
    if (dataUser.user.role !== 'admin') {
      return {
        redirect: {
          destination: '/',
        },
        props: {},
      }
    }
  }

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

export default Admin
