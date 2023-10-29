import { COLORS } from '../../constants/theme'

const Home = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
  },
}

const lightHome = {
  container: {
    ...Home.container,
    backgroundColor: COLORS.light.background,
  },
  text: {
    ...Home.text,
    color: COLORS.light.foreground,
  },
}

const darkHome = {
  container: {
    ...Home.container,
    backgroundColor: COLORS.dark.background,
  },
  text: {
    ...Home.text,
    color: COLORS.dark.foreground,
  },
}

const homeStyles = {
  light: lightHome,
  dark: darkHome,
}

export default homeStyles
