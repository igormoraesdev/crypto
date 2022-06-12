import create from 'zustand'
import { User } from '../data/model'

type Store = {
  user: User | null
  setUser: (user: User) => void
}

const useStore = create<Store>((set) => ({
  user: null,
  setUser: (user: User) => set({ user: user }),
}))

export { useStore }
