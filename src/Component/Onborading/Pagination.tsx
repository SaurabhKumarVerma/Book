import { StyleSheet, View, useWindowDimensions } from "react-native";
import React, { FC, useCallback } from "react";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import { color } from "../../Themes/color";
const SIZE = 10;

type Props = {
  scrollX: Animated.SharedValue<number>;
  itemsLength: number;
};
const Paginator: FC<Props> = ({ scrollX, itemsLength }) => {
  const { width } = useWindowDimensions();
  const inputRange = new Array(itemsLength).fill("").map((_, i) => i * width);

  const getDotAnimatedStyle = useCallback((index: number) => {
    const outputRange = new Array(itemsLength)
      .fill("")
      .map((_, i) => (i === index ? SIZE * 2 : SIZE));
    return useAnimatedStyle(() => {
      const dotWidth = interpolate(
        scrollX.value,
        inputRange,
        outputRange,
        Extrapolate.CLAMP
      );
      return {
        width: dotWidth,
        borderRadius: dotWidth / 2,
      };
    });
  }, []);
  return (
    <View style={styles.container}>
      {new Array(itemsLength).fill("").map((_, index) => {
        return (
          <Animated.View
            key={index}
            style={[styles.item, getDotAnimatedStyle(index)]}
          />
        );
      })}
    </View>
  );
};

export default Paginator;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    // paddingTop: 20,
  },
  item: {
    marginHorizontal: 4,
    height: SIZE,
    borderRadius: SIZE,
    backgroundColor: color.desaturatedLavender,
  },
});
