import { loadVerbs } from "@/data/VerbData"
import { Ionicons } from "@expo/vector-icons"
import { useEffect, useRef, useState } from "react"
import { Keyboard, LayoutAnimation, StyleSheet, Text, TextInput, View } from "react-native"
import Dropdown from "./Dropdown"

type DynamicSearchBarProps = {
  placeholder: string
  state: [boolean, React.Dispatch<React.SetStateAction<boolean>>]
  onSelectValue: (value: string) => void
}

export default function DynamicSearchbar({
  placeholder,
  state,
  onSelectValue
}: DynamicSearchBarProps) {
  const [value, setValue] = useState("")
  const [filteredValues, setFilteredValues] = useState<string[]>([])
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [searching, setSearching] = state

  const inputRef = useRef<TextInput>(null)

  const onFocusCallback = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
    setSearching(true)
  }

  const onChangeTextCallback = async (input: string) => {
    setValue(input)

    if (input) {
      try {
        const matches = loadVerbs().filter(({ name }) =>
          name.toLowerCase().includes(input.toLowerCase())
        )

        const sortedMatches = matches
          .map(({ name }) => name)
          .sort((a: string, b: string) => {
            if (a.toLowerCase() === input.toLowerCase()) return -1
            if (b.toLowerCase() === input.toLowerCase()) return 1
            return a.localeCompare(b)
          })

        setFilteredValues(sortedMatches)
        setDropdownOpen(true)
      } catch (error) {
        console.error("Error fetching fruit list:", error)
      }
    } else {
      setDropdownOpen(false)
    }
  }

  const onPressCallback = (selectedValue: string) => {
    setValue("")
    Keyboard.dismiss()
    onSelectValue(selectedValue)
    setFilteredValues([])
    setDropdownOpen(false)
    setSearching(false)
    inputRef.current?.clear()
  }

  useEffect(() => {
    if (value === "") {
      setDropdownOpen(false)
    }
  }, [value])

  return (
    <View>
      <View style={styles.container}>
        <Ionicons style={styles.icon} name="search-outline" color="#c1c1c1" size={20} />
        <TextInput
          ref={inputRef}
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor="#717171"
          autoCapitalize="none"
          value={value}
          onFocus={onFocusCallback}
          onChangeText={onChangeTextCallback}
        />
        {searching && (
          <Text
            style={styles.cancel}
            onPress={() => {
              Keyboard.dismiss()
              LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
              setSearching(false)
              setFilteredValues([])
              setDropdownOpen(false)
              setValue("")
            }}
          >
            Annuler
          </Text>
        )}
      </View>
      {dropdownOpen && <Dropdown data={filteredValues} onPress={onPressCallback} />}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    width: "100%"
  },

  icon: {
    position: "absolute",
    paddingVertical: 24,
    left: 32,
    minWidth: 40
  },

  input: {
    flexGrow: 1,
    padding: 12,
    paddingLeft: 40,
    marginHorizontal: 20,
    marginVertical: 10,
    color: "#717171",
    fontFamily: "Overlock-Bold",
    fontSize: 17,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: "#e1e1e1"
  },

  cancel: {
    fontFamily: "Overlock-Bold",
    fontSize: 17,
    color: "#cb0003",
    marginRight: 20,
    textDecorationLine: "underline"
  }
})
