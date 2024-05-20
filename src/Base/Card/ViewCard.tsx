import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { StyleProps } from "react-native-reanimated";
import { color } from "../../Themes/color";

interface IViewCard {
  children: React.ReactElement;
  style?: StyleProps;
}

const ViewCard = (props: IViewCard) => {
  return <View style={[styles.card, props.style]}>{props.children}</View>;
};

const styles = StyleSheet.create({
  card: {
    borderColor: color.lightGrey,
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: color.limeWhite,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 }, // Adjust for shadow position
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 4, // For Android (optional)
  },
});
export default ViewCard;
