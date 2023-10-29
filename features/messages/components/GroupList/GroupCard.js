import { View, Text } from "react-native"
import useTheme from "@hooks/useTheme"
import GroupListStyleSheets from "../../styles/groupListStyles"
import Avatar from "@components/Avatar"
import { Octicons } from "@expo/vector-icons"
import { COLORS } from "../../../../constants/theme"

export default function GroupCard({
  name,
  last_msg,
  image_url,
  last_timestamp,
}) {
  const { styles, theme } = useTheme(GroupListStyleSheets)
  return (
    <View style={styles.cardContainer}>
      <Avatar name={name} url={image_url} />
      <View style={{ maxWidth: "80%", width: "100%" }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={styles.cardName}>{name}</Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
              marginRight: -10,
            }}
          >
            <Text>{last_timestamp}</Text>
            <Octicons name="chevron-right" size={24} />
          </View>
        </View>
        <View
          style={{
            maxWidth: "90%",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 16,
          }}
        >
          <Text>{last_msg}</Text>
          <View
            style={{
              width: 8,
              height: 8,
              borderRadius: 4,
              backgroundColor: COLORS[theme].primary,
            }}
          />
        </View>
      </View>
    </View>
  )
}
