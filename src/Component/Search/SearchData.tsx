import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React, { PropsWithChildren } from "react";
import { inject, observer } from "mobx-react";
import { PropsWithStore } from "../../Store/RootStore";
import { IItems } from "../../types/apiresponse.interface";
import { RootStackParamList } from "../../types/react-navigation";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { ScreenName } from "../../Navigatator/ScreenName/ScreenName";
import Card from "../../Base/Card/Card";
import Animated, {
  FadeInDown,
  FadeInLeft,
  FadeInUp,
} from "react-native-reanimated";

const SearchData = (props: PropsWithStore<PropsWithChildren>) => {
  const { searchStore } = props.rootStore;
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const renderItem = (item: IItems) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate(ScreenName.DETAIL_SCREEN, { detailItem: item })
        }
        style={{ marginVertical: 12 }}
      >
        {item ? (
          <Card
            image_URL={
              item.volumeInfo.imageLinks
                ? item.volumeInfo.imageLinks.thumbnail
                : ""
            }
            title={item.volumeInfo.title}
            description={item.volumeInfo.description}
            loading={searchStore.isLoading}
          />
        ) : null}
      </TouchableOpacity>
    );
  };

  const renderEmptyContainer = () => {
    return (
      <View style={{ marginTop: 16, alignItems: "center" }}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "700",
            letterSpacing: 3,
            opacity: 0.4,
          }}
        >
          Search for book , author
        </Text>
      </View>
    );
  };
  const footer = () => {
    return <View style={{ marginVertical: "40%" }} />;
  };
  return (
    <View>
      <FlatList
        data={searchStore.searchDataList}
        keyExtractor={(item, index) => item.id.toString()}
        renderItem={({ item, index }) => renderItem(item)}
        ListEmptyComponent={renderEmptyContainer}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={() => footer()}
      />
    </View>
  );
};

export default inject("rootStore")(observer(SearchData));
// export default
