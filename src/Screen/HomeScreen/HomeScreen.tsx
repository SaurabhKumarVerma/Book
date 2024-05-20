import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import Home from "../../Component/Home/Home";
import { StatusBar } from "expo-status-bar";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <Home />
      <StatusBar hidden />
    </SafeAreaView>
  );
};

export default HomeScreen;
