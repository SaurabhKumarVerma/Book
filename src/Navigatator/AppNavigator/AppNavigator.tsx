import React from "react";
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import CustomBottomTabBar from "./CustomBottomTabBar";
import { ScreenName } from "../ScreenName/ScreenName";
import StackNavigator from "../StackNavigator/StackNavigator";
import SearchScreen from "../../Screen/SearchScreen/SearchScreen";
import HomeScreen from "../../Screen/HomeScreen/HomeScreen";
import Profile from "../../Component/Profile/Profile";

/**
 * The BottomNavigation component is a custom bottom navigation bar that renders three tabs:
 * Home, Learn, and Market.
 *
 * This component uses the `createBottomTabNavigator` function from the `@react-navigation/bottom-tabs`
 * package to create the tab navigation bar. The `CustomBottomTabBar` component is used as the
 * `tabBar` prop, which renders a custom tab bar with the appropriate icons.
 *
 * The `BottomNavigator` component also utilizes the `useNavigation` hook from the `@react-navigation/native`
 * package to access the navigation stack and pass the `navigation` object to the `CustomBottomTabBar` component.
 */

const CustomBottomTabs = (props: BottomTabBarProps) => {
  return <CustomBottomTabBar {...props} />;
};

const AppNavigator = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName={ScreenName.HOME}
      tabBar={CustomBottomTabs}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name={ScreenName.HOME}
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen name={ScreenName.PROFILE} component={Profile} />
    </Tab.Navigator>
  );
};

export default AppNavigator;
