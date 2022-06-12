import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Typography, Loading } from '../../components'
import { Crypto, User } from '../../data/model'
import { CryptoFormat } from '../../helpers'

type Props = {
  user: User
}

const DashboardScreen = ({ user }: Props) => {
  const [crypto, setCrypto] = useState<Crypto | null>()
  const SPREAD = user?.spread ?? 1

  const handleSocket = () => {
    const socket = new WebSocket(process.env.WEBSOCKET_URL as string)
    const sendEvent = JSON.stringify({
      event: 'subscribe',
      pair: ['BTC/USD'],
      subscription: {
        name: 'ticker',
      },
    })

    socket.onopen = () => {
      console.log('Connection established')
      socket.send(sendEvent)
    }

    socket.onmessage = (event) => {
      const messageParsed = Buffer.from(event.data).toString('utf-8')

      if (
        !(
          (messageParsed.startsWith('[') || messageParsed.startsWith('{')) &&
          (messageParsed.endsWith(']') || messageParsed.endsWith('}'))
        )
      )
        return

      const message = JSON.parse(messageParsed)
      const isArray = Array.isArray(message)

      if (!isArray) return

      const dataFormat = message[1]
      const assetData = message.slice(-1)[0]

      const response = {
        assetCode: assetData,
        ask: dataFormat.a[0],
        bid: dataFormat.b[0],
        close: dataFormat.c[0],
        open: dataFormat.o[0],
        openLast24: dataFormat.o[1],
        high: dataFormat.h[0],
        low: dataFormat.l[0],
        lowLast24: dataFormat.l[1],
        volume: dataFormat.v[0],
      }

      const cryptoFormat = CryptoFormat.setPercentage(response, SPREAD)

      setCrypto(cryptoFormat)
    }

    socket.onclose = (event) => {
      if (event.wasClean) {
        console.log(
          `Connection closed cleanly, code=${event.code} reason=${event.reason}`
        )
      } else {
        console.log('Connection died')
      }
    }
    socket.onerror = (error: any) => {
      console.log(`[error] ${error?.message}`)
    }
  }

  useEffect(() => {
    handleSocket()
  }, [])

  if (!crypto)
    return (
      <div className="py-80 flex items-center justify-center h-64">
        <Loading />
      </div>
    )

  return (
    <div className="h-screen bg-white">
      <div className="w-full h-full py-48 container mx-auto flex flex-col items-center justify-start">
        <div className="flex flex-col items-center justify-center h-64 rounded bg-white shadow-2xl shadow-indigo-600 py-4 px-4">
          <div className="flex flex-col w-full">
            <div className="flex justify-between items-center">
              <Image
                className="rounded"
                width={40}
                height={40}
                src="	https://www.cryptomkt.com/static/global/assets/images/bitcoin-logo-solo.png"
                alt="logo bitcoin"
              />
              <Typography
                as="p"
                className="font-secondary text-slate-900 font-bold"
              >
                {`Price ${crypto?.assetCode}`}
              </Typography>
            </div>
            <Typography
              as="p"
              className="font-secondary text-green-600 font-bold mt-6 text-3xl"
            >
              {`$ ${crypto?.ask}`}
            </Typography>
            <div className="mt-4 flex items-center">
              <Typography
                as="p"
                className="font-secondary text-slate-900 font-bold"
              >
                BID:
              </Typography>
              <Typography
                as="p"
                className="ml-4 font-secondary text-slate-900 font-bold"
              >
                {`$ ${crypto?.bid}`}
              </Typography>
            </div>
            <div className="mt-4 flex items-center">
              <Typography
                as="p"
                className="font-secondary text-slate-900 font-bold"
              >
                CLOSE:
              </Typography>
              <Typography
                as="p"
                className="ml-4 font-secondary text-slate-900 font-bold"
              >
                {`$ ${crypto?.close}`}
              </Typography>
            </div>
            <div className="mt-4 flex items-center">
              <Typography
                as="p"
                className="font-secondary text-slate-900 font-bold"
              >
                LAST 24h
              </Typography>
              <Typography
                as="p"
                className="ml-4 font-secondary text-slate-900 font-bold"
              >
                {`$ ${crypto?.lowLast24}`}
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardScreen
