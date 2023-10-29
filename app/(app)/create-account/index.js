import { useState } from 'react'
import { Alert, Button, SafeAreaView, Text, TextInput } from 'react-native'
import supabase from '../../../lib/supabase'
import useUser from '../../../hooks/useUser'
import { useRouter } from 'expo-router'

export default function index() {
  const router = useRouter()
  const { setAccount } = useUser()
  const [username, setUsername] = useState('')
  const [loading, setLoading] = useState(false)

  const createAccount = async () => {
    setLoading(true)
    if (!username) return Alert.alert('You must enter a username')
    const { error, data: account } = await supabase
      .from('accounts')
      .insert([{ username: username.trim() }])

    setLoading(false)
    if (error) return Alert.alert('Failed to create', error.message)

    setAccount(account)
    router.replace('/')
  }

  return (
    <SafeAreaView style={{ alignItems: 'center' }}>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          width: '80%',
        }}
        value={username}
        onChangeText={text => setUsername(text)}
        placeholder='username'
      />
      <Button
        title={loading ? 'Loading...' : 'Submit'}
        onPress={createAccount}
      />
    </SafeAreaView>
  )
}
