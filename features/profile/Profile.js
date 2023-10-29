import { View, Text, TouchableOpacity } from 'react-native'
import useAuthForm from '@features/auth/hooks/useAuthForm'
import useUserStore from '@hooks/useUserStore'
import useTheme from '@hooks/useTheme'
import profileStyles from '@features/profile/styles/styles'

export default function Profile() {
  const { styles } = useTheme(profileStyles)
  const { account } = useUserStore()

  const { signOut } = useAuthForm()

  if (!account) return null
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome {account.username}!</Text>
      <TouchableOpacity onPress={signOut}>
        <Text style={styles.text}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  )
}
