import { View, Text, Image, TouchableOpacity } from "react-native"
import useTheme from "@hooks/useTheme"
import homeStyles from "../styles/styles"
import { Octicons } from "@expo/vector-icons"
import { COLORS } from "../../../constants/theme"
import Animated, {
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated"
import { useEffect } from "react"
import Avatar from "@components/Avatar"

/**
 * @param {Object} props
 * @param {import('../Feed').Push} props.push
 */
export default function PushCard({ push }) {
  const { styles, theme } = useTheme(homeStyles)

  return (
    <View style={styles.card}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Avatar name={push.author.name} url={push.author.avatar_url} />
          <View>
            <Text style={styles.name}>{push.author.name}</Text>
            <Text style={styles.username}>@{push.author.username}</Text>
          </View>
          <Text style={styles.date}>2h</Text>
        </View>
      </View>
      <Text style={styles.text}>{push.text}</Text>
      {push.image && (
        <Image style={styles.image} source={{ uri: push.image }} />
      )}
      {/* {push.video && <Video source={{ uri: push.video }} />} */}
      <View style={styles.footer}>
        <TouchableOpacity style={{ alignItems: "center" }}>
          <Octicons
            name={true ? "heart-fill" : "heart"}
            size={24}
            color={true ? COLORS[theme].danger : COLORS[theme].muted}
          />
          <Text style={styles.text}>{push.likes.length}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ alignItems: "center" }}>
          <Octicons name="comment" size={24} color={COLORS[theme].muted} />
          <Text style={styles.text}>{push.replies.length}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ marginLeft: "auto" }}>
          <Octicons name="share" size={24} color={COLORS[theme].muted} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export function SkeletonPushCard() {
  const opacity = useSharedValue(0.5)
  const { styles } = useTheme(homeStyles)

  useEffect(() => {
    opacity.value = withRepeat(withTiming(0.15, { duration: 1000 }), -1, true)
  }, [])

  return (
    <Animated.View style={[styles.card, { opacity }]}>
      <View style={{}}>
        <View style={styles.header}>
          <View style={[styles.avatar, { backgroundColor: "gray" }]} />
          <View style={{ gap: 5 }}>
            <View
              style={{
                height: 16,
                width: 88,
                backgroundColor: "gray",
                borderRadius: 8,
              }}
            />
            <View
              style={{
                height: 16,
                width: 58,
                backgroundColor: "gray",
                borderRadius: 8,
              }}
            />
          </View>
          <Text style={[styles.date, { fontWeight: "bold", fontSize: 20 }]}>
            X
          </Text>
        </View>
      </View>
      <View
        style={{
          width: "100%",
          height: 52,
          backgroundColor: "gray",
          borderRadius: 16,
        }}
      />
      <View
        style={{
          width: "100%",
          height: 369,
          backgroundColor: "gray",
          borderRadius: 16,
        }}
      />
      <View style={styles.footer}>
        <Octicons name="heart-fill" size={24} color={"gray"} />
        <Octicons name="comment" size={24} color={"gray"} />
      </View>
    </Animated.View>
  )
}
