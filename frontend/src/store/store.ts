import create from 'zustand'
import { User } from '../data/model'

type Store = {
  user: User | null
  listUsers: User[]
  setUser: (user: User) => void
  setListUser: (users: User[]) => void
}

const useStore = create<Store>((set) => ({
  user: null,
  listUsers: [],
  setUser: (user: User) => set({ user: user }),
  setListUser: (users: User[]) => set(() => ({ listUsers: users })),
}))

export { useStore }
