import { Octicons } from "@expo/vector-icons"
import { Link, Tabs } from "expo-router"
import { TouchableOpacity, useColorScheme } from "react-native"
import { COLORS } from "../../../constants/theme"

export default function TabsLayout() {
  const theme = useColorScheme()

  return (
    <Tabs
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarActiveTintColor: COLORS[theme].primary,
        headerTintColor: COLORS[theme].primary,
        headerTitleStyle: {
          color: COLORS[theme].foreground,
        },
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: COLORS[theme].mutedBackground,
        },
        tabBarStyle: {
          backgroundColor: COLORS[theme].mutedBackground,
          borderTopWidth: 0,
        },
      }}
    >
      <Tabs.Screen
        name="(home)/index"
        options={{
          title: "SUPAVERSE",
          tabBarIcon: ({ color }) => (
            <Octicons name="home" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="push/index"
        options={{
          title: "Push",
          tabBarIcon: ({ color }) => (
            <Octicons name="diff-added" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="messages"
        options={{
          title: "Messages",
          tabBarIcon: ({ color }) => (
            <Octicons name="comment-discussion" size={24} color={color} />
          ),
          headerRight: ({ tintColor }) => (
            <Link href="/messages/new-message" asChild>
              <TouchableOpacity style={{ marginRight: 16 }}>
                <Octicons name="diff-added" size={24} color={tintColor} />
              </TouchableOpacity>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="profile/index"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => (
            <Octicons name="person" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  )
}
