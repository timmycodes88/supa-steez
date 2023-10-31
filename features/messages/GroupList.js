import { FlatList, View } from "react-native"
import GroupCard from "./components/GroupList/GroupCard"

const mock = [
  {
    id: "1",
    name: "Abundance Squad",
    image_url: undefined,
    last_msg: "This was the last messages lol!!",
    last_timestamp: "2:30pm",
  },
  {
    id: "2",
    name: "Other guys",
    image_url: undefined,
    last_msg:
      "This was the last messages lol!! This was the last messages lol!!",
    last_timestamp: "2:33pm",
  },
]

export default function GroupList() {
  return (
    <View>
      <FlatList
        data={mock}
        renderItem={({ item }) => <GroupCard {...item} />}
        keyExtractor={({ id }) => id}
        style={{ height: "100%" }}
      />
    </View>
  )
}
