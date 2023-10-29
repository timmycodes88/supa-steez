import { create } from 'zustand'

const useUser = create(set => ({
  loading: true,
  user: null,
  session: null,
  setUser: (user, session) => set({ user, session, loading: false }),
}))

export default useUser
