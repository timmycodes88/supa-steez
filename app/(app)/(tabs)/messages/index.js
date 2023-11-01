import { View } from "react-native"
import GroupList from "../../../../features/messages/GroupList"
import { COLORS } from "../../../../constants/theme"
import useTheme from "../../../../hooks/useTheme"

export default function Messages() {
  const { theme } = useTheme()
  return (
    <View style={{ flex: 1, backgroundColor: COLORS[theme].background }}>
      <GroupList />
    </View>
  )
}
