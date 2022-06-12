import { parseCookies } from 'nookies'
import { useEffect } from 'react'
import { useStore } from '../store/store'

type Props = {
  children: any
}

const StoreGate = ({ children }: Props) => {
  const { setUser, setListUser, listUsers } = useStore((state) => state)

  useEffect(() => {
    const cookies = parseCookies()
    const data = cookies['auth']
    const storeUsers = localStorage.getItem('usersList')

    if (storeUsers) {
      const parserList = JSON.parse(storeUsers)
      const newLists = [...listUsers, ...parserList]

      setListUser(newLists)
    }

    if (data) {
      const dataParsed = JSON.parse(data)
      setUser(dataParsed.user)
    }
  }, [])
  console.log('store usersList', listUsers)
  return children
}

export default StoreGate
