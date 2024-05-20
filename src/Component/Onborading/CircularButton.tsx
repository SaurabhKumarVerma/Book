import { StyleSheet, View } from "react-native";
import React, { useEffect } from "react";
import Svg, { Circle } from "react-native-svg";
import Animated, {
  Easing,
  FadeIn,
  ReduceMotion,
  useAnimatedProps,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import IconButton from "../../Base/IconButton/IconButton";
import { color } from "../../Themes/color";

const AnimatedCircle = Animated.createAnimatedComponent(Circle);
const radius = 50;
const circumference = radius * Math.PI * 2;
type Props = {
  index: number;
  onPress: () => void;
  screensLenght: number;
};
const centerX = 70;
const centerY = 70;

const CircularButton = ({ screensLenght, onPress, index }: Props) => {
  const strokeOffset = useSharedValue(circumference);

  const animatedCircleProps = useAnimatedProps(() => {
    return {
      strokeDashoffset: withTiming(strokeOffset.value, {
        duration: 1250,
        reduceMotion: ReduceMotion.Never,
        easing: Easing.bounce,
      }),
    };
  });
  useEffect(() => {
    let percentage = circumference / screensLenght;
    strokeOffset.value = circumference - percentage * (index + 1);
  }, [index]);

  return (
    <View style={styles.container}>
      <IconButton
        onPress={onPress}
        icon="arrow-right"
        roundness="full"
        size="big"
        style={{
          position: "absolute",
          zIndex: 2,
        }}
      />
      <Svg height={centerY * 2} width={centerX * 2}>
        <Circle
          cx={centerX}
          cy={centerY}
          r={radius}
          stroke={color.lightblue}
          strokeWidth="2"
        />
        <AnimatedCircle
          entering={FadeIn.delay(100)}
          animatedProps={animatedCircleProps}
          cx={centerX}
          cy={centerY}
          r={radius}
          fill={color.white}
          stroke={color.aquamarine}
          strokeWidth="4"
          strokeLinecap={"round"}
          strokeDasharray={`${radius * Math.PI * 2}`}
        />
      </Svg>
    </View>
  );
};

export default CircularButton;

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    zIndex: 10,
  },
});
