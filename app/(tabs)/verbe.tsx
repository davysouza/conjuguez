import CapriolaRegular from "@/assets/fonts/Capriola/Capriola-Regular.ttf"
import { OverlockBold, OverlockRegular } from "@/assets/fonts/Overlock"
import Section from "@/components/Section"
import { loadVerbs } from "@/data/VerbData"
import { Ionicons } from "@expo/vector-icons"
import { useFonts } from "expo-font"
import { router, useFocusEffect, useLocalSearchParams } from "expo-router"
import * as Speech from "expo-speech"
import { useState } from "react"
import { FlatList, Platform, StatusBar, StyleSheet, Text, View } from "react-native"
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  withTiming
} from "react-native-reanimated"

const Colors = {
  simples: "#cb0003",
  composes: "#004ba0"
}

export default function VerbeScreen() {
  useFocusEffect(() => {
    StatusBar.setBarStyle("light-content", true)
    if (Platform.OS === "android") {
      StatusBar.setBackgroundColor("#000", true)
    }
  })

  const { verbe } = useLocalSearchParams()

  const [selectedType, setType] = useState<"simples" | "composes">("simples")

  const progress = useDerivedValue(() =>
    selectedType === "simples" ? withTiming(0) : withTiming(1)
  )

  const rnStyleHeader = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(progress.value, [0, 1], [Colors.simples, Colors.composes])
  }))

  const rnStyleMenuSimples = useAnimatedStyle(() => ({
    color: interpolateColor(progress.value, [0, 1], [Colors.simples, "#c1c1c1"])
  }))

  const rnStyleMenuComposes = useAnimatedStyle(() => ({
    color: interpolateColor(progress.value, [0, 1], ["#c1c1c1", Colors.composes])
  }))

  const [fontsLoaded] = useFonts({
    "Capriola-Regular": CapriolaRegular,
    "Overlock-Regular": OverlockRegular,
    "Overlock-Bold": OverlockBold
  })

  if (!fontsLoaded) {
    return <Text>Loading...</Text>
  }

  const selectedVerbe = loadVerbs().find(({ name }) => name === verbe)
  const activeVoice = selectedVerbe?.voices.find(({ voice }) => voice === "active")
  const tenseData = activeVoice?.types.find(({ type }) => selectedType === type)
  if (selectedVerbe === undefined || tenseData === undefined) {
    return router.navigate("/error")
  }

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.header, rnStyleHeader]}>
        <View style={styles.headerTitle}>
          <Ionicons
            name="volume-high-outline"
            color="#fff"
            size={24}
            onPress={async () => {
              let selectedVoice: Speech.Voice | undefined = undefined
              if (Platform.OS === "ios") {
                const availableVoices = await Speech.getAvailableVoicesAsync()
                selectedVoice = availableVoices.find(
                  ({ identifier }) => identifier === "com.apple.ttsbundle.siri_Marie_fr-FR_compact"
                )
              }

              Speech.speak(selectedVerbe.name, {
                language: "fr-FR",
                voice: selectedVoice?.identifier
              })
            }}
          />
          <Text style={styles.headerTitleText}>{verbe}</Text>
        </View>
        <Text style={styles.headerSubtitle}>{selectedVerbe.description}</Text>
      </Animated.View>
      <View style={styles.menu}>
        <View style={styles.menuItem} onTouchEnd={() => setType("simples")}>
          <Animated.Text style={[styles.menuItemText, rnStyleMenuSimples]}>simples</Animated.Text>
        </View>
        <View style={styles.menuItem} onTouchEnd={() => setType("composes")}>
          <Animated.Text style={[styles.menuItemText, rnStyleMenuComposes]}>composés</Animated.Text>
        </View>
      </View>
      <View style={styles.content}>
        <FlatList
          style={styles.flatList}
          data={tenseData.modes}
          renderItem={({ item }) => (
            <Section title={item.mode} type={selectedType} tenses={item.tenses} />
          )}
          showsVerticalScrollIndicator={false}
          pagingEnabled
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  flatList: {
    paddingTop: 20
  },

  header: {
    flex: 1.7,
    flexDirection: "column",
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingVertical: 30
  },

  headerTitle: {
    flexDirection: "row",
    alignItems: "center"
  },

  headerTitleText: {
    color: "#fff",
    fontFamily: "Overlock-Bold",
    fontSize: 24,
    paddingLeft: 5,
    textTransform: "lowercase"
  },

  headerSubtitle: {
    color: "#fff",
    opacity: 0.7,
    fontFamily: "Overlock-Regular",
    fontSize: 14
  },

  menu: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#fff"
  },

  content: {
    flex: 8
  },

  menuItem: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },

  menuItemText: {
    color: "#c1c1c1",
    fontFamily: "Overlock-Bold",
    fontSize: 20
  }
})
