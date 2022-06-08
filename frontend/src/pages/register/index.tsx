import { NextPage } from 'next'
import Head from 'next/head'
import { RegisterScreen } from '../../screens'

const Register: NextPage = () => {
  return (
    <>
      <Head>
        <title>Register Crypto</title>
      </Head>
      <RegisterScreen />
    </>
  )
}

export default Register
