import { Image, Text, View } from "react-native"
import useTheme from "@hooks/useTheme"
import { COLORS } from "../constants/theme"

/**
 * @param {Object} props
 * @param {string} props.name
 * @param {string} [props.url] */
export default function Avatar({ name, url }) {
  const { styles } = useTheme(AvatarStyleSheets)

  if (!url)
    return (
      <View style={styles.avatar}>
        <Text
          style={[
            styles.text,
            {
              textTransform: "uppercase",
              fontWeight: "bold",
              fontSize: 24,
            },
          ]}
        >
          {name[0]}
        </Text>
      </View>
    )
  return <Image style={styles.avatar} source={{ uri: url }} />
}

const main = {
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
  },
}

const light = {
  avatar: {
    ...main.avatar,
    backgroundColor: COLORS.light.secondary,
  },
}
const dark = {
  avatar: {
    ...main.avatar,
    backgroundColor: COLORS.dark.secondary,
  },
}

const AvatarStyleSheets = {
  light,
  dark,
}
