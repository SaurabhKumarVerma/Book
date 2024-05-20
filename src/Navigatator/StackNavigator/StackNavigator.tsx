import React, { PropsWithChildren } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types/react-navigation";
import { ScreenName } from "../ScreenName/ScreenName";
import AppNavigator from "../AppNavigator/AppNavigator";
import Detail from "../../Component/Detail/Detail";
import SearchScreen from "../../Screen/SearchScreen/SearchScreen";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import HomeScreen from "../../Screen/HomeScreen/HomeScreen";
import { inject, observer } from "mobx-react";
import { PropsWithStore } from "../../Store/RootStore";
import AuthNavigator from "../AuthNavigator/AuthNavigator";

const StackNavigator = (props: PropsWithStore<PropsWithChildren>) => {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  const { authStore } = props.rootStore;
  return (
    <Stack.Navigator
      initialRouteName={ScreenName.ROOT}
      screenOptions={{ headerShown: false, animation: "slide_from_right" }}
    >
      <Stack.Screen
        name={ScreenName.ROOT}
        component={AppNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen name={ScreenName.DETAIL_SCREEN} component={Detail} />
      <Stack.Screen
        name={ScreenName.SEARCH}
        component={SearchScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default inject("rootStore")(observer(StackNavigator));
