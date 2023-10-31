import { COLORS } from "../../../constants/theme"

const main = {
  cardContainer: {
    maxWidth: "100%",
    height: 80,
    borderBottomWidth: 1,
    paddingHorizontal: 16,
    paddingVertical: 8,
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
  },
  cardName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  cardLastMsg: {
    fontSize: 12,
  },
}

const light = {
  cardContainer: {
    ...main.cardContainer,
    borderBottomColor: COLORS.light.mutedBackground,
  },
  cardName: {
    ...main.cardName,
    color: COLORS.light.foreground,
  },
  cardLastMsg: {
    ...main.cardLastMsg,
    color: COLORS.light.foreground,
  },
  cardTime: {
    ...main.cardLastMsg,
    color: COLORS.light.mutedForeground,
    opacity: 0.8,
  },
}

const dark = {
  cardContainer: {
    ...main.cardContainer,
    borderBottomColor: COLORS.dark.mutedBackground,
  },
  cardName: {
    ...main.cardName,
    color: COLORS.dark.foreground,
  },
  cardLastMsg: {
    ...main.cardLastMsg,
    color: COLORS.dark.foreground,
  },
  cardTime: {
    ...main.cardLastMsg,
    color: COLORS.dark.mutedForeground,
    opacity: 0.8,
  },
}

const GroupListStyleSheets = {
  light,
  dark,
}

export default GroupListStyleSheets
