import React, { useState, useEffect, useRef } from "react";
import {
  Animated,
  Text,
  View,
  StyleSheet,
  StyleProp,
  ViewProps,
  TextProps,
  ViewStyle,
  TextStyle,
} from "react-native";

interface TextAnimatorProps {
  content: string;
  duration?: number;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  onFinish?: () => void;
}

const TextAnimator: React.FC<TextAnimatorProps> = ({
  content,
  duration = 1000,
  style,
  textStyle,
  onFinish,
}) => {
  const textArr = content.trim().split(" ");
  const animatedValues = useRef<Animated.Value[]>(
    textArr.map(() => new Animated.Value(0))
  ).current;

  const animate = (toValue = 1) => {
    const animations: Animated.CompositeAnimation[] = textArr.map((_, i) =>
      Animated.timing(animatedValues[i], {
        toValue,
        duration,
        useNativeDriver: true,
      })
    );

    Animated.stagger(
      duration / 5,
      toValue === 0 ? animations.reverse() : animations
    ).start(() => {
      setTimeout(() => animate(toValue === 0 ? 1 : 0), 1000);
    });
  };

  useEffect(() => {
    animate();
  }, []);

  return (
    <View style={[style, styles.textWrapper]}>
      {textArr.map((word, index) => (
        <Animated.Text
          key={`${word}-${index}`}
          style={[
            textStyle,
            {
              opacity: animatedValues[index],
              transform: [
                {
                  translateY: Animated.multiply(
                    animatedValues[index],
                    new Animated.Value(-5)
                  ),
                },
              ],
            },
          ]}
        >
          {word}
          {index < textArr.length - 1 ? " " : ""}
        </Animated.Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  textWrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "center",
    marginLeft: 2,
    paddingTop: 20,
    // justifyContent: "center",
    // alignItems: "center",
    // alignSelf: "center",
  },
});

export default TextAnimator;
