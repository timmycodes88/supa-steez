import { Slot, SplashScreen, useRouter } from 'expo-router'
import { useEffect, useRef } from 'react'
import useUserStore from '../hooks/useUserStore'
import supabase from '../lib/supabase'
import { View, useColorScheme } from 'react-native'

SplashScreen.preventAutoHideAsync()

export default function Base() {
  const router = useRouter()
  const { setSession, setUser, setAccount, loading, setLoading, clear } =
    useUserStore()
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

      if (!account) {
        setLoading(false)
        router.replace('/create-account')
        return
      }

      setAccount(account)
      setLoading(false)
    })

    supabase.auth.onAuthStateChange(async (_, session) => {
      if (loadingRef.current) return
      setSession(session)
      setUser(session?.user ?? null, session)
      if (!session) {
        clear()
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

  const dark = useColorScheme() === 'dark'

  return (
    <View style={{ flex: 1 }}>
      <Slot />
    </View>
  )
}
