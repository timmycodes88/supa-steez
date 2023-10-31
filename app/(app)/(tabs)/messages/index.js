import { View, Text, useColorScheme } from "react-native"
import GroupList from "../../../../features/messages/GroupList"
import { COLORS } from "../../../../constants/theme"

export default function Messages() {
  const theme = useColorScheme()
  return (
    <View style={{ flex: 1, backgroundColor: COLORS[theme].backgroundColor }}>
      <GroupList />
    </View>
  )
}
