import { Conjugation } from "@/data/VerbData"
import { StyleSheet, Text, View } from "react-native"
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  withTiming
} from "react-native-reanimated"

type CardProps = {
  title: string
  mode: string
  type: "simples" | "composes"
  conjugation: Conjugation[]
}

export default function Card({ title, type, mode, conjugation }: CardProps) {
  const progress = useDerivedValue(() => (type === "simples" ? withTiming(0) : withTiming(1)))

  const rnTitleStyle = useAnimatedStyle(() => ({
    color: interpolateColor(progress.value, [0, 1], ["#620002", "#00326a"])
  }))

  const rnRightContentStyle = useAnimatedStyle(() => ({
    color: interpolateColor(progress.value, [0, 1], ["#cb0003", "#004ba0"])
  }))

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Animated.Text style={[styles.titleText, rnTitleStyle]}>{title}</Animated.Text>
      </View>
      <View style={styles.content}>
        <View style={styles.contentLeft}>
          {conjugation.map(({ pronoun }, index) => (
            <Text key={`${type}-${mode}-${title}-${index}`} style={styles.leftText}>
              {pronoun}
            </Text>
          ))}
        </View>
        <View style={styles.contentRight}>
          {conjugation.map(({ pronoun, auxiliaries, verb }) => (
            <Animated.Text
              key={`${pronoun}-${verb}`}
              style={[styles.rightText, rnRightContentStyle]}
            >
              {auxiliaries ? auxiliaries.join(" ") + " " + verb : verb}
            </Animated.Text>
          ))}
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    backgroundColor: "#fff",
    borderRadius: 22,
    width: 283
  },

  title: {
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: "#f1f1f1"
  },

  titleText: {
    fontSize: 14,
    fontFamily: "Capriola-Regular",
    textTransform: "capitalize",
    opacity: 0.5
  },

  content: {
    flexDirection: "row",
    padding: 20
  },

  contentLeft: {
    flex: 1
  },

  leftText: {
    fontFamily: "Capriola-Regular",
    fontSize: 14,
    color: "#d1d1d1"
  },

  contentRight: {
    flex: 1
  },

  rightText: {
    fontFamily: "Capriola-Regular",
    fontSize: 14
  }
})
