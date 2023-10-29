import { create } from 'zustand'

const useUser = create(set => ({
  loading: true,
  user: null,
  session: null,
  account: {},
  setSession: session => set({ session }),
  setUser: user => set({ user }),
  setAccount: account => set({ account }),
  setLoading: loading => set({ loading }),
}))

export default useUser
