import { Slot, SplashScreen, router } from 'expo-router'
import { useEffect, useRef } from 'react'
import useUser from '../hooks/useUser'
import supabase from '../lib/supabase'

SplashScreen.preventAutoHideAsync()

export default function Base() {
  const { setSession, setUser, setAccount, loading, setLoading } = useUser()
  const loadingRef = useRef(loading)

  useEffect(() => {
    supabase.auth.getSession().then(async ({ data: { session } }) => {
      setSession(session)
      setUser(session?.user ?? null)
      if (!session) {
        router.replace('/register')
        setLoading(false)
        return
      }

      const { data: account } = await supabase
        .from('accounts')
        .select()
        .eq('id', session.user.id)
        .single()

      if (!account) return router.replace('/create-account')

      setAccount(account)
      setLoading(false)
    })

    supabase.auth.onAuthStateChange(async (_, session) => {
      if (loadingRef.current) return
      setSession(session)
      setUser(session?.user ?? null, session)
      if (!session) {
        router.replace('/register')
        setLoading(false)
        return
      }

      // * Get Account (and create if not exists)
      const { data: account } = await supabase
        .from('accounts')
        .select()
        .eq('id', session.user.id)
        .single()

      if (!account) return router.replace('/create-account')

      setAccount(account)
      setLoading(false)
      router.replace('/')
    })
  }, [])

  useEffect(() => {
    if (loading) return

    SplashScreen.hideAsync()
    setTimeout(() => (loadingRef.current = false), 10)
  }, [loading])

  return <Slot />
}
