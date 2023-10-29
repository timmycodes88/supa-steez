import { create } from 'zustand'

const useUser = create(set => ({
  loading: true,
  user: null,
  session: null,
  account: null,
  setSession: session => set({ session }),
  setUser: user => set({ user }),
  setAccount: account => set({ account }),
  setLoading: loading => set({ loading }),
  clear: () => set({ user: null, session: null, account: null }),
}))

export default useUser
