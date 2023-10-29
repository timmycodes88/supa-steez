import { create } from 'zustand'

const useUser = create(set => ({
  loading: true,
  user: null,
  setUser: user => set({ user, loading: false }),
}))

export default useUser
