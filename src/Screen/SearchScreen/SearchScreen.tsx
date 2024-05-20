import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Search from "../../Component/Search/Search";
import { SafeAreaView } from "react-native";

const SearchScreen = () => {
  return (
    <SafeAreaView>
      <Search />
    </SafeAreaView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
