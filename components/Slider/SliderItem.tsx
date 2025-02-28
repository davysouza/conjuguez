import Card from "@/components/Card"
import { Tense } from "@/data/VerbData"
import { Dimensions, StyleSheet } from "react-native"
import Animated, {
  Extrapolation,
  interpolate,
  SharedValue,
  useAnimatedStyle
} from "react-native-reanimated"

type SliderItemProps = {
  index: number
  item: Tense
  mode: string
  type: "simples" | "composes"
  scrollX: SharedValue<number>
}

export default function SliderItem({ index, item, type, mode, scrollX }: SliderItemProps) {
  const rnAnimatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: interpolate(
          scrollX.value,
          [(index - 1) * width, index * width, (index + 1) * width],
          [-width * 0.25, 0, width * 0.25],
          Extrapolation.CLAMP
        )
      },
      {
        scale: interpolate(
          scrollX.value,
          [(index - 1) * width, index * width, (index + 1) * width],
          [0.9, 1, 0.9],
          Extrapolation.CLAMP
        )
      }
    ]
  }))

  return (
    <Animated.View style={[styles.container, rnAnimatedStyle]}>
      <Card title={item.tense} type={type} mode={mode} conjugation={item.conjugations} />
    </Animated.View>
  )
}

const { width } = Dimensions.get("screen")

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: width,
    gap: 20
  }
})
