import { View, Text, StyleSheet } from "react-native";
import React, { PropsWithChildren, useEffect, useState } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { TextInput } from "react-native-gesture-handler";
import { inject, observer } from "mobx-react";
import { PropsWithStore } from "../../Store/RootStore";
import SearchData from "./SearchData";
import Header from "./Header";

const Search = (props: PropsWithStore<PropsWithChildren>) => {
  const { searchStore } = props.rootStore;
  const [textInput, OnTextChangeInput] = useState<string | undefined>();

  const onTextChange = (text) => {
    OnTextChangeInput(text);
    searchStore.resetSearchData();
  };

  useEffect(() => {
    return searchStore.resetSearchData();
  }, []);

  return (
    <View >
      <View style={{}}>
        <Header />
      </View>
      <View style={styles.inputBoxContainer}>
        <FontAwesome name="book" size={20} style={{ marginLeft: 10 }} />
        <TextInput
          style={styles.inputBox}
          placeholder="Search For Book"
          onChangeText={(text) => onTextChange(text)}
          onSubmitEditing={() => searchStore.searchBook(textInput)}
        />
      </View>

      <View>
        <SearchData />
      </View>
    </View>
  );
};

export default inject("rootStore")(observer(Search));

const styles = StyleSheet.create({
  inputBoxContainer: {
    // backgroundColor: 'red',
    alignItems: "center",
    flexDirection: "row",
    borderWidth: 1,
    // width: "90%",
    // marginTop: 50,
    borderRadius: 10,
    // paddingHorizontal: 10,
    marginHorizontal: 16,
  },
  inputBox: {
    marginHorizontal: 10,
    flex: 1,
    paddingVertical: 10,
  },
});
