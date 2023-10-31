import { Octicons } from "@expo/vector-icons"
import { Link, Stack } from "expo-router"
import { TouchableOpacity, useColorScheme } from "react-native"
import { COLORS } from "../../../../constants/theme"

export default function MessagesLayout() {
  const theme = useColorScheme()
  return (
    <Stack
      screenOptions={{
        headerTintColor: COLORS[theme].primary,
        headerTitleStyle: {
          color: COLORS[theme].foreground,
        },
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: COLORS[theme].mutedBackground,
        },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "Messages",
          headerRight: ({ tintColor }) => (
            <Link href="/messages/new-message" asChild>
              <TouchableOpacity style={{ marginRight: 16 }}>
                <Octicons name="diff-added" size={24} color={tintColor} />
              </TouchableOpacity>
            </Link>
          ),
        }}
      />
      <Stack.Screen
        name="[id]"
        options={{
          headerShown: true,
          title: "Chat Name",
          headerRight: ({ tintColor }) => (
            <TouchableOpacity>
              <Octicons name="three-bars" size={24} color={tintColor} />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="new-message"
        options={{
          presentation: "modal",
        }}
      />
    </Stack>
  )
}
