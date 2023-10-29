import { Stack } from "expo-router"

export default function _layout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen
        name="chat"
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
