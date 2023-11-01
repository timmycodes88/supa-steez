import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Button,
  Image,
} from "react-native"
import useAuthForm from "./hooks/useAuthForm"
import useTheme from "@hooks/useTheme"
import authStyleSheets from "./styles/styles"
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view"
import { useRef, useState } from "react"
import { Octicons } from "@expo/vector-icons"
import { COLORS } from "@constants/theme"
import { useRouter } from "expo-router"
import SocialLogins from "./components/SocialLogins"
import Shine from "@assets/images/auth/shine.png"

export default function Register() {
  const router = useRouter()
  const { styles, theme } = useTheme(authStyleSheets)
  const { email, setEmail, password, setPassword, signUpWithEmail, loading } =
    useAuthForm()

  const [hidePassword, setHidePassword] = useState(true)

  const passwordInputRef = useRef(null)

  return (
    <KeyboardAwareScrollView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      contentContainerStyle={styles.container}
      scrollEnabled={false}
    >
      <View style={styles.mainView}>
        <View style={styles.header}>
          <Image source={Shine} style={styles.title} />
          <Text style={styles.desc}>Create an account to get started</Text>
        </View>
        <TextInput
          value={email}
          returnKeyType="next"
          onEndEditing={() => passwordInputRef.current.focus()}
          textContentType="emailAddress"
          onChangeText={text => setEmail(text)}
          style={styles.input}
          autoCapitalize="none"
          placeholder="Enter your email"
        />
        <View
          style={{ width: "100%", alignItems: "center", position: "relative" }}
        >
          <TextInput
            ref={passwordInputRef}
            value={password}
            returnKeyType="join"
            textContentType="password"
            secureTextEntry={hidePassword}
            onChangeText={text => setPassword(text)}
            style={styles.input}
            placeholder="Enter your password"
            autoCapitalize="none"
            onSubmitEditing={signUpWithEmail}
          />
          <TouchableOpacity
            style={{
              position: "absolute",
              right: "12%",
              top: "50%",
              transform: [{ translateY: -12 }],
            }}
            onPress={() => setHidePassword(!hidePassword)}
          >
            <Octicons
              name={hidePassword ? "eye" : "eye-closed"}
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
        <SocialLogins />
        <View
          style={{
            flexDirection: "row",
            gap: 4,
            alignItems: "center",
            marginTop: 10,
          }}
        >
          <Text style={{ color: COLORS[theme].foreground }}>
            Already have an account?
          </Text>
          <Button title="Login" onPress={() => router.push("/(auth)/login")} />
        </View>
      </View>
    </KeyboardAwareScrollView>
  )
}
