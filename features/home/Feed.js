import { View, Text, FlatList } from "react-native"
import useTheme from "@hooks/useTheme"
import homeStyles from "./styles/styles"
import PushCard, { SkeletonPushCard } from "./components/PushCard"
import useFeedStore from "./hooks/useFeedStore"
import { useEffect } from "react"
import EndOfPushes from "./components/EndOfPushes"

/**
 * @typedef {Object} Push
 * @property {string} id
 * @property {Object} author
 * @property {string} author.username
 * @property {string} author.name
 * @property {string} [author.avatar_url]
 * @property {string} [text]
 * @property {string} [image]
 * @property {string} [video]
 * @property {string[]} [likes]
 * @property {string[]} [replies]
 */
const mock = [
  {
    id: "1",
    author: {
      username: "thegoat",
      name: "The Goat",
      avatar_url: "https://avatars.githubusercontent.com/u/60869810?v=4",
    },
    text: "This is going to be the greatest app ever!",
    image: "https://picsum.photos/1920/1080",
    video: undefined,
    likes: ["thegoat", "thegoat", "thegoat"],
    replies: ["thegoat", "thegoat", "thegoat", "thegoat", "thegoat"],
  },
  {
    id: "2",
    author: {
      username: "thegoat",
      name: "The Goat",
      avatar_url: "https://avatars.githubusercontent.com/u/60869810?v=4",
    },
    text: "This is going to be the greatest app ever!",
    image: "https://picsum.photos/1080/1920",
    video: undefined,
    likes: ["thegoat", "thegoat", "thegoat", "thegoat", "thegoat"],
    replies: ["thegoat", "thegoat", "thegoat", "thegoat"],
  },
  {
    id: "3",
    author: {
      username: "thegoat",
      name: "The Goat",
      avatar_url: "https://avatars.githubusercontent.com/u/60869810?v=4",
    },
    text: "This is going to be the greatest app ever!",
    image: "https://picsum.photos/1080/1080",
    video: undefined,
    likes: ["thegoat", "thegoat", "thegoat", "thegoat"],
    replies: ["thegoat", "thegoat"],
  },
  {
    id: "4",
    author: {
      username: "thegoat",
      name: "The Goat",
      avatar_url: "https://avatars.githubusercontent.com/u/60869810?v=4",
    },
    text: "This is going to be the greatest app ever!",
    image: "https://picsum.photos/2688/1440",
    video: undefined,
    likes: ["thegoat", "thegoat", "thegoat"],
    replies: ["thegoat", "thegoat", "thegoat", "thegoat"],
  },
]

export default function Feed() {
  const { styles } = useTheme(homeStyles)

  const { feed, setFeed, addFeed } = useFeedStore()

  useEffect(() => {
    const t = setTimeout(() => setFeed(mock), 2200)
    return () => clearTimeout(t)
  }, [])

  if (!feed.length)
    return (
      <View style={[styles.container, { paddingTop: 8 }]}>
        {[...new Array(10)].map((_, i) => (
          <SkeletonPushCard key={i} />
        ))}
      </View>
    )

  return (
    <View style={styles.container}>
      <FlatList
        data={feed}
        renderItem={({ item }) => <PushCard push={item} />}
        keyExtractor={({ id }) => id}
        style={{ minHeight: "100%", paddingTop: 8 }}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={<EndOfPushes />}
        onEndReachedThreshold={2}
        // onEndReached={() => addFeed(mock)}
      />
    </View>
  )
}
