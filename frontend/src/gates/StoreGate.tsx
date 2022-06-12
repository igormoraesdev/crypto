import { parseCookies } from 'nookies'
import { useEffect } from 'react'
import { useStore } from '../store/store'

type Props = {
  children: any
}

const StoreGate = ({ children }: Props) => {
  const { setUser } = useStore((state) => state)

  useEffect(() => {
    const cookies = parseCookies()
    const data = cookies['auth']

    if (data) {
      const dataParsed = JSON.parse(data)
      setUser(dataParsed.user)
    }
  }, [])
  return children
}

export default StoreGate
