import { Octicons } from "@expo/vector-icons"
import { Link, Tabs } from "expo-router"
import useTheme from "@hooks/useTheme"
import { COLORS } from "../../../constants/theme"

export default function TabsLayout() {
  const { theme } = useTheme()

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
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Octicons name="comment-discussion" size={24} color={color} />
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
