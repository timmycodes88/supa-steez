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
}

const dark = {
  cardContainer: {
    ...main.cardContainer,
    borderBottomColor: COLORS.dark.mutedBackground,
  },
  cardName: {
    ...main.cardName,
  },
  cardLastMsg: {
    ...main.cardLastMsg,
    color: COLORS.dark.foreground,
  },
}

const GroupListStyleSheets = {
  light,
  dark,
}

export default GroupListStyleSheets
