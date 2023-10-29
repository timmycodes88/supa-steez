import { COLORS } from "@constants/theme"

const Home = {
  container: {
    flex: 1,
    alignItems: "center",
  },
  card: {
    width: "100%",
    marginVertical: 8,
    padding: 16,
    gap: 12,
    borderBottomWidth: 1,
  },
  header: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  username: {
    fontSize: 14,
    opacity: 0.6,
  },
  date: {
    fontSize: 14,
    opacity: 0.6,
    marginLeft: "auto",
  },
  content: {
    flex: 1,
  },
  text: {},
  image: {
    borderRadius: 8,
    marginTop: 8,
    flex: 1,
    aspectRatio: 1,
    resizeMode: "cover",
    width: "100%",
  },
  footer: {
    flexDirection: "row",
    gap: 24,
    marginTop: 8,
  },
}

const lightHome = {
  container: {
    ...Home.container,
    backgroundColor: COLORS.light.background,
  },
  card: {
    ...Home.card,
    borderBottomColor: COLORS.light.mutedBackground,
  },
  header: Home.header,
  name: {
    ...Home.name,
    color: COLORS.light.foreground,
  },
  username: {
    ...Home.username,
    color: COLORS.light.foreground,
  },
  date: {
    ...Home.date,
    color: COLORS.light.foreground,
  },
  content: Home.content,
  text: {
    ...Home.text,
    color: COLORS.light.foreground,
  },
  image: Home.image,
  footer: Home.footer,
}

const darkHome = {
  container: {
    ...Home.container,
    backgroundColor: COLORS.dark.background,
  },
  card: {
    ...Home.card,
    borderBottomColor: COLORS.dark.mutedBackground,
  },
  header: Home.header,
  name: {
    ...Home.name,
    color: COLORS.dark.foreground,
  },
  username: {
    ...Home.username,
    color: COLORS.dark.foreground,
  },
  date: {
    ...Home.date,
    color: COLORS.dark.foreground,
  },
  content: Home.content,
  text: {
    ...Home.text,
    color: COLORS.dark.foreground,
  },
  image: Home.image,
  footer: Home.footer,
}

const homeStyles = {
  light: lightHome,
  dark: darkHome,
}

export default homeStyles
