import type { NextPage } from 'next'
import Head from 'next/head'
import { LoginScreen } from '../../screens'

const Login: NextPage = () => {
  return (
    <>
      <Head>
        <title>Login Crypto</title>
      </Head>
      <LoginScreen />
    </>
  )
}

export default Login
