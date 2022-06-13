import { GetServerSideProps } from 'next'
import nookies from 'nookies'
import Head from 'next/head'
import { AdminScreen } from '../../screens'

const Admin = () => {
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
