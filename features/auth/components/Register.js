import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Button,
} from 'react-native'
import useAuthForm from '../hooks/useAuthForm'
import useTheme from '../../../hooks/useTheme'
import authStyleSheets from '../styles'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useRef, useState } from 'react'
import GoogleImage from '../../../assets/images/auth/google.png'
import { Octicons } from '@expo/vector-icons'
import { COLORS } from '../../../constants/theme'
import { useRouter } from 'expo-router'

export default function Register() {
  const router = useRouter()
  const { styles, theme } = useTheme(authStyleSheets)
  const { email, setEmail, password, setPassword, signUpWithEmail, loading } =
    useAuthForm()

  const [hidePassword, setHidePassword] = useState(true)

  const passwordInputRef = useRef(null)

  return (
    <KeyboardAwareScrollView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      contentContainerStyle={styles.container}
      scrollEnabled={false}
    >
      <View style={styles.mainView}>
        <View style={styles.header}>
          <Text style={styles.title}>Join Supa Hot</Text>
          <Text style={styles.desc}>Create an account to get started</Text>
        </View>
        <TextInput
          value={email}
          returnKeyType='next'
          onEndEditing={() => passwordInputRef.current.focus()}
          textContentType='emailAddress'
          onChangeText={text => setEmail(text)}
          style={styles.input}
          placeholder='Enter your email'
        />
        <View
          style={{ width: '100%', alignItems: 'center', position: 'relative' }}
        >
          <TextInput
            ref={passwordInputRef}
            value={password}
            returnKeyType='join'
            textContentType='password'
            secureTextEntry={hidePassword}
            onChangeText={text => setPassword(text)}
            style={styles.input}
            placeholder='Enter your password'
            onSubmitEditing={signUpWithEmail}
          />
          <TouchableOpacity
            style={{
              position: 'absolute',
              right: '12%',
              top: '50%',
              transform: [{ translateY: -12 }],
            }}
            onPress={() => setHidePassword(!hidePassword)}
          >
            <Octicons
              name={hidePassword ? 'eye' : 'eye-closed'}
              size={24}
              color={COLORS[theme].mutedForeground}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.actionButton} onPress={signUpWithEmail}>
          {loading ? (
            <Text>Loading...</Text>
          ) : (
            <Text style={styles.actionButtonText}>Create Account</Text>
          )}
        </TouchableOpacity>
        <View style={{ flexDirection: 'row', gap: 32, marginTop: 20 }}>
          <SocialLoginButton img={GoogleImage} styles={styles} />
          <SocialLoginButton img={GoogleImage} styles={styles} />
          <SocialLoginButton img={GoogleImage} styles={styles} />
        </View>
        <View
          style={{
            flexDirection: 'row',
            gap: 4,
            alignItems: 'center',
            marginTop: 10,
          }}
        >
          <Text style={{ color: COLORS[theme].foreground }}>
            Already have an account?
          </Text>
          <Button title='Login' onPress={() => router.push('/(auth)/login')} />
        </View>
      </View>
    </KeyboardAwareScrollView>
  )
}

function SocialLoginButton({ img, styles, onPress }) {
  return (
    <TouchableOpacity style={styles.socialBtn} onPress={onPress}>
      <Image source={img} style={styles.socialImg} />
    </TouchableOpacity>
  )
}
