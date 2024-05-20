import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React, { PropsWithChildren, useEffect } from "react";
import { inject, observer } from "mobx-react";
import { PropsWithStore } from "../../Store/RootStore";
import UserProfle from "./UserProfle";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import { color } from "../../Themes/color";
import Header from "../Detail/Header";

const Profile = (props: PropsWithStore<PropsWithChildren>) => {
  const { authStore } = props.rootStore;

  useEffect(() => {
    authStore.getUserToken();
  }, []);

  return (
    <View style={{}}>
      <View>
        <Header />
        <UserProfle />
      </View>

      <View style={{ marginTop: 54 }}>
        <View style={{ marginBottom: 20 }}>
          <TouchableOpacity></TouchableOpacity>
        </View>
      </View>

      <View>
        <Pressable
          onPress={() => authStore.logout()}
          style={{
            flexDirection: "row",
            backgroundColor: color.lightGrey,
            paddingVertical: 14,
            justifyContent: "center",
            marginHorizontal: 20,
            borderRadius: 10,
            alignContent: "center",
          }}
        >
          <SimpleLineIcons name="logout" size={18} />
          <Text
            style={{ marginHorizontal: 10, fontSize: 16, fontWeight: "700" }}
          >
            Logout
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default inject("rootStore")(observer(Profile));

const styles = StyleSheet.create({
  image: {
    width: 74,
    height: 74,
  },
  profileAction: {
    right: -4,
    bottom: -10,
  },
});
