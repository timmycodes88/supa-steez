import { View, Text, TouchableOpacity } from 'react-native'
import useAuthForm from '../../../../features/auth/hooks/useAuthForm'
import useUser from '../../../../hooks/useUser'
import useTheme from '../../../../hooks/useTheme'
import homeStyles from '../../../../features/home/styles'

export default function Home() {
  const { styles } = useTheme(homeStyles)
  const { loading, account } = useUser()

  const { signOut } = useAuthForm()

  if (loading || !account) return null
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome {account.username}!</Text>
      <TouchableOpacity onPress={signOut}>
        <Text style={styles.text}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  )
}
