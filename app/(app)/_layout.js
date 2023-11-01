import { Octicons } from "@expo/vector-icons"
import { Stack } from "expo-router"
import { TouchableOpacity } from "react-native"
import useTheme from "@hooks/useTheme"

export default function RootLayout() {
  const { theme } = useTheme()
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="message/[id]"
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
    </Stack>
  )
}
