import {
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { color } from "../../Themes/color";

interface IUserCard {
  leftImageSource: ImageSourcePropType;
  rightImageSource: ImageSourcePropType;
  text: string;
}
const UserCard = (props: IUserCard) => {
  return (
    <Pressable
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderWidth: 1,
        borderColor: color.gray1,
        borderRadius: 12,
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image
          source={props.leftImageSource}
          style={{
            width: 28,
            height: 28,
            marginHorizontal: 18,
            marginVertical: 16,
          }}
        />
        <Text style={{ color: color.darkGray1 }}>{props.text}</Text>
      </View>
      <View style={{ marginRight: 16 }}>
        <Image
          source={props.rightImageSource}
          style={{ width: 28, height: 28 }}
        />
      </View>
    </Pressable>
  );
};

export default UserCard;

const styles = StyleSheet.create({});
