import CapriolaRegular from "@/assets/fonts/Capriola/Capriola-Regular.ttf"
import { OverlockRegular } from "@/assets/fonts/Overlock"
import { useFonts } from "expo-font"
import { Link, Stack, useFocusEffect } from "expo-router"
import React from "react"
import { Platform, StatusBar, StyleSheet, Text, View } from "react-native"

export default function ErrorScreen() {
  useFocusEffect(() => {
    StatusBar.setBarStyle("light-content", true)
    if (Platform.OS === "android") {
      StatusBar.setBackgroundColor("#fff", true)
    }
  })

  useFonts({
    "Capriola-Regular": CapriolaRegular,
    "Overlock-Regular": OverlockRegular
  })

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={styles.container}>
        <View style={styles.messageContent}>
          <Text style={styles.message}>Oups ! Pas de verbe trouvé !</Text>
        </View>
        <Link href="/(tabs)" style={styles.button}>
          Retournez à l'écran d'accueil !
        </Link>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 40
  },

  messageContent: {
    width: 290,
    height: 290,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#cb0003",
    borderRadius: 60
  },

  message: {
    fontFamily: "Capriola-Regular",
    fontSize: 36,
    padding: 40,
    lineHeight: 48,
    textAlign: "center",
    color: "#fff"
  },

  button: {
    fontFamily: "Overlock-Regular",
    fontSize: 20,
    textDecorationLine: "underline",
    color: "#cb0003",
    opacity: 0.5
  }
})
