import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { color } from "../../../Themes/color";
import TextAnimator from "../AnimatedText/AnimatedText";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../../types/react-navigation";
import { ScreenName } from "../../../Navigatator/ScreenName/ScreenName";

const Searchbar = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(ScreenName.SEARCH)}
      style={styles.container}
    >
      <View style={{ flexDirection: "row" }}>
        <EvilIcons
          name="search"
          size={24}
          color={color.darkGray}
          style={styles.iconStyle}
        />
        <TextAnimator
          content="Search Your Favourite Book, Author"
          duration={1400}
          style={{
            paddingVertical: 10,
          }}
          textStyle={styles.animatedTextStyle}
        />
      </View>
      <View
        style={{
          justifyContent: "center",
          marginRight: 4,
        }}
      >
        <FontAwesome name="book" size={20} color={color.darkGray} />
      </View>
    </TouchableOpacity>
  );
};

export default Searchbar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.gray1,
    borderRadius: 10,
    paddingVertical: 4,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 8,
  },
  iconStyle: {
    justifyContent: "center",
    alignSelf: "center",
    // marginLeft: 8,
  },
  animatedTextStyle: {
    fontSize: 12,
    fontWeight: "600",
    color: color.darkGray,
    opacity: 0.4,
  },
});
