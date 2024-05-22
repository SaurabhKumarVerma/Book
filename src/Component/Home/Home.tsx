import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";
import React, { PropsWithChildren, useEffect } from "react";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { ScreenName } from "../../Navigatator/ScreenName/ScreenName";
import Card from "../../Base/Card/Card";
import Searchbar from "../../Base/Animated/SearchBar/Searchbar";
import { PropsWithStore } from "../../Store/RootStore";
import { inject, observer } from "mobx-react";
import { IItems } from "../../types/apiresponse.interface";
import { uniqBy } from "lodash";
import { RootStackParamList } from "../../types/react-navigation";
import { AutoImage } from "../../Base/AutoImage/AutoImage";
const Home = (props: PropsWithStore<PropsWithChildren>) => {
  const { bookStore, authStore } = props.rootStore;
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  useEffect(() => {
    bookStore.getAllBooks();
    authStore.getUserToken();
  }, []);

  const renderItem = (item: IItems) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate(ScreenName.DETAIL_SCREEN, { detailItem: item })
        }
        style={{ marginVertical: 12 }}
      >
        <Card
          image_URL={item.volumeInfo.imageLinks.thumbnail}
          title={item.volumeInfo.title}
          description={item.volumeInfo.description}
          loading={bookStore.isLoading}
        />
      </TouchableOpacity>
    );
  };

  const renderFooter = () => {
    if (bookStore.isMoreBookLoading) {
      return (
        <View style={{ marginVertical: "10%" }}>
          <ActivityIndicator size={"large"} />
        </View>
      );
    } else {
      return <View style={{ height: 100 }} />;
    }
  };

  return (
    <View style={{ marginHorizontal: 16 }}>
      <View
        style={{
          marginTop: 30,
          marginBottom: 20,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <AutoImage
          source={{
            uri: authStore.userProfile ? authStore.userProfile.user.photo : "",
          }}
          maxHeight={50}
          maxWidth={50}
          style={{ borderRadius: 25 }}
        />
        <Text style={{ fontSize: 16, fontWeight: "700" }}>
          {authStore.userProfile
            ? authStore.userProfile.user.givenName.toUpperCase()
            : "s"}
        </Text>
      </View>
      <View style={{}}>
        <Searchbar />
      </View>

      <View>
        <FlatList
          extraData={uniqBy(bookStore.listAllBooks, "id")}
          data={uniqBy(bookStore.listAllBooks, "id")}
          keyExtractor={(item, _) => item.id.toString()}
          renderItem={({ item }) => renderItem(item)}
          contentContainerStyle={{ marginVertical: 30 }}
          showsVerticalScrollIndicator={false}
          onEndReached={() => bookStore.canLoadMoreBooks()}
          onEndReachedThreshold={0.2}
          maxToRenderPerBatch={10}
          ListFooterComponent={renderFooter}
          ListFooterComponentStyle={{ marginVertical: 40 }}
        />
      </View>
    </View>
  );
};

export default inject("rootStore")(observer(Home));
