import { COLORS, SIZES } from "../../../constants/theme"

const auth = {
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  mainView: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
  },
  header: { alignItems: "center", marginBottom: 40 },
  title: {
    maxWidth: "80%",
    maxHeight: 100,
    objectFit: "contain",
  },
  desc: {
    fontSize: SIZES.lg,
  },
  input: {
    width: "80%",
    height: 50,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  actionButton: {
    width: "80%",
    height: 50,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  actionButtonText: {
    fontSize: SIZES.md,
    fontWeight: "bold",
  },
  socialBtn: {
    width: 44,
    height: 44,
    borderWidth: 1,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  socialImg: {
    maxWidth: 32,
    maxHeight: 32,
  },
}

const lightAuth = {
  container: {
    ...auth.container,
    backgroundColor: COLORS.light.background,
  },
  mainView: auth.mainView,
  header: auth.header,
  title: auth.title,

  desc: {
    ...auth.desc,
    color: COLORS.light.foreground,
  },
  input: {
    ...auth.input,
    color: COLORS.light.foreground,
    borderColor: COLORS.light.mutedForeground,
  },
  actionButton: {
    ...auth.actionButton,
    backgroundColor: COLORS.light.primary,
  },
  actionButtonText: {
    ...auth.actionButtonText,
    color: "#fff",
  },
  socialBtn: {
    ...auth.socialBtn,
    borderColor: COLORS.light.mutedForeground,
    backgroundColor: COLORS.light.mutedBackground,
  },
  socialImg: auth.socialImg,
}
const darkAuth = {
  container: {
    ...auth.container,
    backgroundColor: COLORS.dark.background,
  },
  mainView: auth.mainView,
  header: auth.header,
  title: auth.title,
  desc: {
    ...auth.desc,
    color: COLORS.dark.foreground,
  },
  input: {
    ...auth.input,
    color: COLORS.dark.foreground,
    borderColor: COLORS.dark.mutedForeground,
  },
  actionButton: {
    ...auth.actionButton,
    backgroundColor: COLORS.dark.primary,
  },
  actionButtonText: {
    ...auth.actionButtonText,
    color: "#fff",
  },
  socialBtn: {
    ...auth.socialBtn,
    borderColor: COLORS.dark.mutedForeground,
    backgroundColor: COLORS.dark.mutedBackground,
  },
  socialImg: auth.socialImg,
}

const authStyleSheets = {
  light: lightAuth,
  dark: darkAuth,
}

export default authStyleSheets
