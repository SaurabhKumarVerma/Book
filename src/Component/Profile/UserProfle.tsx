import { Image, StyleSheet, Text, View } from "react-native";
import React, { PropsWithChildren } from "react";
import { PropsWithStore } from "../../Store/RootStore";
import { inject, observer } from "mobx-react";
import { color } from "../../Themes/color";

const UserProfile = (props: PropsWithStore<PropsWithChildren<object>>) => {
  const { authStore } = props.rootStore;
  return (
    <View
      style={{
        backgroundColor: color.gainsboro,
        paddingVertical: 30,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
      }}
    >
      <View style={styles.profileImageWrraper}>
        <Image
          source={{ uri: authStore.userProfile.user.photo }}
          style={{ width: 105, height: 105, borderRadius: 50 }}
        />
      </View>

      <View style={{ marginTop: 24, alignItems: "center" }}>
        <Text style={{ fontSize: 16, fontWeight: "600", opacity: 0.4 }}>
          {authStore.userProfile.user.name}
        </Text>
        <Text style={{ fontSize: 16, fontWeight: "600", opacity: 0.5 }}>
          {authStore.userProfile.user.email}
        </Text>
      </View>
    </View>
  );
};

export default inject("rootStore")(observer(UserProfile));

const styles = StyleSheet.create({
  profileImageWrraper: {
    borderWidth: 4,
    borderRadius: 105,
    borderColor: color.aquamarine,
    alignItems: "center",
    width: 120,
    aspectRatio: 1,
    justifyContent: "center",
    position: "relative",
    alignSelf: "center",
    marginTop: 20,
  },
  profileAction: {
    right: -4,
    bottom: -10,
  },
});
