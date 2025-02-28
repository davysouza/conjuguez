import { OverlockBold } from "@/assets/fonts/Overlock"
import SatisfyRegular from "@/assets/fonts/Satisfy/Satisfy-Regular.ttf"
import DynamicSearchbar from "@/components/DynamicSearchbar/DynamicSearchbar"
import { useFonts } from "expo-font"
import { router, useFocusEffect } from "expo-router"
import { useState } from "react"
import { Platform, StatusBar, StyleSheet, Text, View } from "react-native"

export default function Index() {
  useFocusEffect(() => {
    StatusBar.setBarStyle("dark-content", true)
    if (Platform.OS === "android") {
      StatusBar.setBackgroundColor("#fff", true)
    }
  })

  const [fontsLoaded] = useFonts({
    "Satisfy-Regular": SatisfyRegular,
    "Overlock-Bold": OverlockBold
  })

  const [searching, setSearching] = useState(false)

  if (!fontsLoaded) {
    return <Text>Loading...</Text>
  }

  return (
    <View style={[styles.container, searching && styles.containerOnSearch]}>
      <Text style={styles.title}>Conjuguez !</Text>
      <DynamicSearchbar
        placeholder="Entrez un verbe..."
        state={[searching, setSearching]}
        onSelectValue={(verb: string) =>
          router.push({ pathname: "/(tabs)/verbe", params: { verbe: verb } })
        }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
  },

  containerOnSearch: {
    justifyContent: "flex-start",
    paddingTop: 64
  },

  title: {
    fontFamily: "Satisfy-Regular",
    fontSize: 48,
    color: "#cb0003"
  }
})
