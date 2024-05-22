import {
  View,
  Text,
  useWindowDimensions,
  StyleSheet,
  SafeAreaView,
  FlatList,
} from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import Animated, {
  FadeIn,
  FadeInDown,
  FadeInLeft,
  FadeInRight,
} from "react-native-reanimated";
import Header from "./Header";
import { StarRatingDisplay } from "react-native-star-rating-widget";

const Detail = () => {
  const { width } = useWindowDimensions();
  const { params } = useRoute();

  const renderCategories = (item: string) => {
    return (
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginHorizontal: 20,
        }}
      >
        <Animated.Text
          style={{ opacity: 0.4 }}
          entering={FadeInRight.delay(1000)}
          numberOfLines={1}
        >
          {item}
        </Animated.Text>
      </View>
    );
  };

  const renderCategory = () => {
    if (params.detailItem.volumeInfo.categories) {
      return (
        <View>
          <FlatList
            data={params.detailItem.volumeInfo.categories}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => renderCategories(item)}
            scrollEnabled={false}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
      );
    }
  };
  return (
    <View style={{ flex: 1 }}>
      <Animated.ScrollView
        style={{ backgroundColor: "#E5E5E5", flex: 1, position: "relative" }}
        showsVerticalScrollIndicator={false}
      >
        <View>
          <View style={styles.container}>
            <Animated.Image
              sharedTransitionTag={params.detailItem.volumeInfo.title}
              source={{
                uri: params.detailItem.volumeInfo.imageLinks.thumbnail,
              }}
              style={{
                width: width,
                height: width,
                borderBottomLeftRadius: 20,
                borderBottomRightRadius: 20,
              }}
            />
          </View>
          <Animated.View
            entering={FadeInDown.delay(800)}
            style={{
              borderTopLeftRadius: 20,
              overflow: "hidden",
              marginTop: 12,
            }}
          >
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Animated.Text
                entering={FadeInLeft.delay(900)}
                style={styles.textAbout}
              >
                Description
              </Animated.Text>
              <Animated.Text
                entering={FadeInRight.delay(900)}
                style={styles.textAbout}
              >
                Categories
              </Animated.Text>
            </View>

            <Animated.View
              entering={FadeInLeft.delay(700)}
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginLeft: 12,
              }}
            >
              {params.detailItem.volumeInfo.averageRating ? (
                <StarRatingDisplay
                  rating={params.detailItem.volumeInfo?.averageRating || 0}
                />
              ) : (
                <Text style={{ fontSize: 14, fontWeight: "600" }}>
                  No Rating Available
                </Text>
              )}

              <Animated.View entering={FadeIn.delay(600)}>
                {renderCategory()}
              </Animated.View>
            </Animated.View>

            {params.detailItem.volumeInfo?.description ? (
              <Text style={styles.text}>
                {params.detailItem.volumeInfo?.description}
              </Text>
            ) : (
              <View
                style={{
                  alignItems: "center",
                  marginTop: 30,
                }}
              >
                <Text style={{ fontSize: 18, fontWeight: "700" }}>
                  No Description
                </Text>
              </View>
            )}
          </Animated.View>
        </View>
      </Animated.ScrollView>
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "white",
    // alignItems: "center",
    // justifyContent: "space-between",
  },
  textContainer: {
    position: "absolute",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    bottom: 10,
    left: 10,
    right: 10,
    padding: 16,
    borderRadius: 20,
  },
  textName: {
    color: "white",
    fontSize: 32,
    fontWeight: "bold",
  },
  textLocation: {
    color: "white",
    fontSize: 16,
  },
  textAbout: {
    color: "#323232",
    fontSize: 28,
    fontWeight: "bold",
    margin: 10,
  },
  text: {
    color: "#323232",
    fontSize: 14,
    marginHorizontal: 10,
    textAlign: "justify",
    fontWeight: "500",
    lineHeight: 28,
    marginTop: 10,
  },
});
