import { View, Text, TouchableOpacity } from 'react-native'
import useAuthForm from '../../../../features/auth/hooks/useAuthForm'
import useUser from '../../../../hooks/useUser'
import useTheme from '../../../../hooks/useTheme'
import homeStyles from '../../../../features/home/styles'

export default function Home() {
  const { styles } = useTheme(homeStyles)
  const { loading } = useUser()

  const { signOut } = useAuthForm()

  if (loading) return null
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={signOut}>
        <Text style={styles.text}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  )
}