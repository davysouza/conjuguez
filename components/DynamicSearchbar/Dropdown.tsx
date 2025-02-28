import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"

type DropdownProps = {
  data: string[]
  onPress: (selectedValue: string) => void
}

export default function Dropdown({ data, onPress }: DropdownProps) {
  return (
    <View style={styles.wrapper}>
      <ScrollView style={styles.container} nestedScrollEnabled={true}>
        {data.map((value: string, index: number) => (
          <TouchableOpacity key={index} onPress={() => onPress(value)} style={styles.item}>
            <Text style={styles.itemText}>{value}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    maxHeight: 100,
    width: 328,
    alignSelf: "center"
  },

  container: {
    backgroundColor: "#f1f1f1",
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#ccc",
    width: "100%"
  },

  item: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#eee"
  },

  itemText: {
    fontSize: 16,
    fontFamily: "Overlock-Bold",
    color: "#717171",
    textDecorationStyle: "solid",
    textDecorationColor: "#717171",
    textDecorationLine: "underline"
  }
})
