import { useState } from 'react'
import supabase from '../../../lib/supabase'
import { Alert } from 'react-native'

/**
 * @typedef {Object} UseAuthForm
 * @property {string} email
 * @property {string} password
 * @property {string} passwordConfirmation
 * @property {boolean} loading
 * @property {(string) => void} setEmail
 * @property {(string) => void} setPassword
 * @property {(string) => void} setPasswordConfirmation
 * @property {() => Promise<void>} signInWithEmail
 * @property {() => Promise<void>} signUpWithEmail
 * @property {() => Promise<void>} signOut
 *
 *
 * @returns {UseAuthForm}
 */
export default function useAuthForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')
  const [loading, setLoading] = useState(false)

  async function signInWithEmail() {
    setLoading(true)
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) Alert.alert('Failed to Login', error.message)
    setLoading(false)
  }

  async function signUpWithEmail() {
    setLoading(true)
    const {
      error,
      data: { session },
    } = await supabase.auth.signUp({
      email,
      password,
    })

    if (error) Alert.alert('Failed to Register', error.message)
    else if (!session)
      Alert.alert('Awesome!', 'Check your email for the confirmation link')
    setLoading(false)
  }

  async function signOut() {
    const { error } = await supabase.auth.signOut()
    if (error) Alert.alert('Failed to Sign Out', error.message)
  }

  return {
    email,
    password,
    passwordConfirmation,
    loading,
    setEmail,
    setPassword,
    setPasswordConfirmation,
    signInWithEmail,
    signUpWithEmail,
    signOut,
  }
}
