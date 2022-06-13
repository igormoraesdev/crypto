import { parseCookies } from 'nookies'
import { useEffect } from 'react'
import { useStore } from '../store/store'

const useStoreReydrate = () => {
  const { setUser, setListUser } = useStore((state) => state)

  useEffect(() => {
    console.log('StoreGate initialized')
    const cookies = parseCookies()
    const data = cookies['auth']
    const storeUsers = localStorage.getItem('usersList')

    if (storeUsers) {
      const parserList = JSON.parse(storeUsers)
      const newLists = [...parserList]
      setListUser(newLists)
    } else {
      setListUser([])
    }

    if (data) {
      const dataParsed = JSON.parse(data)
      setUser(dataParsed.user)
    }
  }, [])
  return {}
}

export default useStoreReydrate
