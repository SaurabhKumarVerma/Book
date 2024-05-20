import { View } from "react-native";
import React, { PropsWithChildren, useEffect } from "react";
import AppNavigator from "./Navigatator/AppNavigator/AppNavigator";
import { inject, observer } from "mobx-react";
import { PropsWithStore } from "./Store/RootStore";
import AuthNavigator from "./Navigatator/AuthNavigator/AuthNavigator";
import StackNavigator from "./Navigatator/StackNavigator/StackNavigator";

const Main = (props: PropsWithStore<PropsWithChildren>) => {
  const { authStore } = props.rootStore;

  useEffect(() => {
    authStore.getUserToken();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {authStore.isLoggedIn ? <StackNavigator /> : <AuthNavigator />}
    </View>
  );
};

export default inject("rootStore")(observer(Main));
