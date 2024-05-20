import React from "react";
import { UNAUTHORIZEDSTACKPARAMLIST } from "../../types/react-navigation";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ScreenName } from "../ScreenName/ScreenName";
import { OnboardingScreen } from "../../Screen/OnboardingScreen/OnboardingScreen";
import LoginScreen from "../../Screen/LoginScreen/LoginScreen";

const AuthNavigator = () => {
  const Stack = createNativeStackNavigator<UNAUTHORIZEDSTACKPARAMLIST>();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={ScreenName.ONBOARDING} component={OnboardingScreen} />
      <Stack.Screen name={ScreenName.LOGIN} component={LoginScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
