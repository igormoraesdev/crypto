import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Navbar } from '../components'
import StoreGate from '../gates/StoreGate'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <StoreGate>
        <Navbar />
        <Component {...pageProps} />
      </StoreGate>
    </>
  )
}

export default MyApp
