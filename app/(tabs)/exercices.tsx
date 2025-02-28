import { useFocusEffect } from "expo-router"
import { Platform, StatusBar, StyleSheet, Text, View } from "react-native"

export default function ExercicesScreen() {
  useFocusEffect(() => {
    StatusBar.setBarStyle("light-content", true)
    if (Platform.OS === "android") {
      StatusBar.setBackgroundColor("#25292e", true)
    }
  })

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Exercices screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    color: "#fff"
  }
})
