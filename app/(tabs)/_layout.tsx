import { Tabs } from "expo-router"

import Ionicons from "@expo/vector-icons/Ionicons"

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#cb0003",
        headerStyle: {
          backgroundColor: "white"
        },
        headerShadowVisible: false,
        headerTintColor: "white",
        tabBarStyle: {
          backgroundColor: "white"
        }
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Accueil",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? "home-sharp" : "home-outline"} color={color} size={24} />
          )
        }}
      />
      <Tabs.Screen
        name="exercices"
        options={{
          title: "Exercices",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? "pencil" : "pencil-outline"} color={color} size={24} />
          )
        }}
      />
      <Tabs.Screen name="verbe" options={{ href: null }} />
    </Tabs>
  )
}
