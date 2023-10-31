import { View, Text, TouchableOpacity } from "react-native"
import React from "react"
import homeStyles from "../styles/styles"
import useTheme from "@hooks/useTheme"
import useUserStore from "@hooks/useUserStore"
import { COLORS } from "../../../constants/theme"

export default function EndOfPushes() {
  const { styles, theme } = useTheme(homeStyles)
  const { account } = useUserStore()

  return (
    <View style={{ padding: 16 }}>
      <Text style={[styles.text, { fontSize: 38 }]}>
        Hi @{account.username},
      </Text>
      <Text style={[styles.text, { fontSize: 20 }]}>
        Add friends to view more posts!
      </Text>
      <TouchableOpacity
        style={{
          width: "100%",
          paddingVertical: 8,
          alignItems: "center",
          backgroundColor: COLORS[theme].primary,
          borderRadius: 8,
          marginVertical: 32,
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "700", color: "#fff" }}>
          Find Friends
        </Text>
      </TouchableOpacity>
    </View>
  )
}
