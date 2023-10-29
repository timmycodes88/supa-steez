import { Slot, SplashScreen, router } from 'expo-router'
import { useEffect, useRef } from 'react'
import useUser from '../hooks/useUser'
import supabase from '../lib/supabase'

SplashScreen.preventAutoHideAsync()

export default function Base() {
  const { setUser, loading } = useUser()
  const loadingRef = useRef(loading)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null, session)
      if (!session) router.replace('/register')
    })

    supabase.auth.onAuthStateChange((_, session) => {
      if (loadingRef.current) return
      setUser(session?.user ?? null, session)
      if (session) router.replace('/')
      else router.replace('/register')
    })
  }, [])

  useEffect(() => {
    if (loading) return

    SplashScreen.hideAsync()
    setTimeout(() => (loadingRef.current = false), 10)
  }, [loading])

  return <Slot />
}
