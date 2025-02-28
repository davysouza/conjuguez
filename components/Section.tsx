import Slider from "@/components/Slider/Slider"
import { Tense } from "@/data/VerbData"
import { StyleSheet, Text, View } from "react-native"

type SectionProps = {
  title: string
  type: "simples" | "composes"
  tenses: Tense[]
}

export default function Section({ title, type, tenses }: SectionProps) {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <Slider type={type} mode={title} itemList={tenses} />
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    color: "#9c9c9c",
    fontSize: 16,
    fontFamily: "Capriola-Regular",
    paddingHorizontal: 40,
    textTransform: "lowercase"
  }
})
