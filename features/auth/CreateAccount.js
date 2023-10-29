import { View, Text, TextInput, Alert } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import useTheme from '../../hooks/useTheme'
import authStyleSheets from './styles/styles'
import { useRouter } from 'expo-router'
import useUserStore from '../../hooks/useUserStore'
import { useEffect, useState } from 'react'
import { Button } from 'react-native'
import supabase from '../../lib/supabase'

export default function CreateAccount() {
  const { styles } = useTheme(authStyleSheets)
  const router = useRouter()
  const { account, setAccount } = useUserStore()
  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [loading, setLoading] = useState(false)

  const createAccount = async () => {
    if (!name) return Alert.alert('You must enter you name')
    if (!username) return Alert.alert('You must enter a username')
    setLoading(true)
    const { error, data: accounts } = await supabase
      .from('accounts')
      .insert([{ username: username.trim(), name: name.trim() }])
      .select()

    setLoading(false)
    if (error) return Alert.alert('Failed to create', error.message)

    setAccount(accounts[0])
  }

  useEffect(() => {
    if (!account) return
    router.replace('/')
  }, [account])

  return (
    <KeyboardAwareScrollView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      contentContainerStyle={styles.container}
      scrollEnabled={false}
    >
      <View style={styles.header}>
        <Text style={styles.title}>Create Account</Text>
        <Text style={styles.desc}>Create an account to get started</Text>
      </View>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={text => setName(text)}
        placeholder='Full Name'
      />
      <TextInput
        style={styles.input}
        value={username}
        onChangeText={text => setUsername(text)}
        placeholder='username'
      />
      <Button
        title={loading ? 'Loading...' : 'Submit'}
        onPress={createAccount}
      />
    </KeyboardAwareScrollView>
  )
}
