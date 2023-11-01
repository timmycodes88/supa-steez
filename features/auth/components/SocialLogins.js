import { View, TouchableOpacity, Image } from "react-native"
import useAuthForm from "@features/auth/hooks/useAuthForm"
import AppleImage from "@assets/images/auth/apple.png"
import GoogleImage from "@assets/images/auth/google.png"
import XImage from "@assets/images/auth/x.png"
import DiscordImage from "@assets/images/auth/discord.png"
import useTheme from "@hooks/useTheme"
import authStyleSheets from "../styles/styles"

export default function SocialLogins() {
  const { styles } = useTheme(authStyleSheets)
  const willBeTheLoginFuncs = useAuthForm()

  return (
    <View style={{ flexDirection: "row", gap: 32, marginTop: 20 }}>
      <SocialLoginButton
        onPress={() => {}}
        img={AppleImage}
        styles={styles}
        apple
      />
      <SocialLoginButton onPress={() => {}} img={GoogleImage} styles={styles} />
      <SocialLoginButton
        onPress={() => {}}
        img={DiscordImage}
        styles={styles}
        discord
      />
      <SocialLoginButton onPress={() => {}} img={XImage} styles={styles} X />
    </View>
  )
}

function SocialLoginButton({ img, styles, onPress, apple, X, discord }) {
  const dark = useTheme().theme === "dark"
  return (
    <TouchableOpacity style={styles.socialBtn} onPress={onPress}>
      <Image
        source={img}
        style={[
          styles.socialImg,
          apple && dark && { tintColor: "white" },
          X && !dark && { tintColor: "black" },
          discord && { maxHeight: 24 },
        ]}
      />
    </TouchableOpacity>
  )
}
