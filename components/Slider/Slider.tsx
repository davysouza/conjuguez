import { Tense } from "@/data/VerbData"
import { View } from "react-native"
import Animated, { useAnimatedScrollHandler, useSharedValue } from "react-native-reanimated"
import SliderItem from "./SliderItem"

type SliderProps = {
  mode: string
  type: "simples" | "composes"
  itemList: Tense[]
}

export default function Slider({ type, mode, itemList }: SliderProps) {
  const scrollX = useSharedValue(0)

  const onScrollHandler = useAnimatedScrollHandler({
    onScroll: (e) => (scrollX.value = e.contentOffset.x)
  })

  return (
    <View>
      <Animated.FlatList
        data={itemList}
        renderItem={({ item, index }) => (
          <SliderItem item={item} index={index} type={type} mode={mode} scrollX={scrollX} />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        onScroll={onScrollHandler}
      />
    </View>
  )
}
