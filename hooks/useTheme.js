import { useMemo } from "react"
import { StyleSheet, useColorScheme } from "react-native"

export default function useTheme(styleSheets = {}) {
  const theme = useColorScheme()

  const styles = useMemo(
    () => StyleSheet.create(styleSheets[theme]),
    [theme, styleSheets]
  )

  return { styles, theme }
}
