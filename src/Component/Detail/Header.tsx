import { StyleSheet } from "react-native";
import React from "react";
import Animated, { FadeIn, FadeInLeft } from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { TouchableOpacity } from "react-native-gesture-handler";
import { color } from "../../Themes/color";
import AntDesign from "@expo/vector-icons/AntDesign";

const AnimatedPressable = Animated.createAnimatedComponent(TouchableOpacity);
const Header = () => {
  const inset = useSafeAreaInsets();
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  return (
    <Animated.View
      style={[styles.container, { top: inset.top }]}
      entering={(FadeIn.delay(500), FadeInLeft.delay(600))}
    >
      <AnimatedPressable
        style={{ backgroundColor: color.lightGrey, borderRadius: 22 }}
        onPress={() => navigation.goBack()}
      >
        <Animated.View style={{ padding: 10 }} entering={FadeInLeft.delay(700)}>
          <AntDesign name="arrowleft" size={20} color={color.black} />
        </Animated.View>
      </AnimatedPressable>
    </Animated.View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    left: 20,
    right: 20,
    zIndex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  chevron: {
    width: 44,
    height: 44,
  },
});
