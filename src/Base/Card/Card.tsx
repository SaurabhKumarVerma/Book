import { View, Text, useWindowDimensions } from "react-native";
import React from "react";
import ViewCard from "./ViewCard";
import { AutoImage } from "../AutoImage/AutoImage";
import { createShimmerPlaceholder } from "react-native-shimmer-placeholder";
import { LinearGradient } from "expo-linear-gradient";
const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);

interface ICard {
  image_URL: string;
  title: string;
  description: string;
  author?: string[];
  loading: boolean;
}

const Card = (props: ICard) => {
  const { width } = useWindowDimensions();

  return (
    <ViewCard
      style={{
        overflow: "hidden",
        flexWrap: "wrap",
      }}
    >
      <View style={{ flexDirection: "row" }}>
        <ShimmerPlaceholder
          width={90}
          height={120}
          LinearGradient={LinearGradient}
          visible={!props.loading}
          shimmerStyle={[{ borderRadius: 10, margin: 12 }]}
          shimmerColors={["#F8F8F8", "#E8E8E8", "#F8F8F8"]}
          isInteraction
        >
          <AutoImage
            source={{
              uri:
                props.image_URL === undefined
                  ? "https://covers.openlibrary.org/a/olid/OL23919A-M.jpg"
                  : props.image_URL,
            }}
            maxWidth={90}
            maxHeight={120}
            resizeMode="cover"
            style={{ margin: 12, borderRadius: 10 }}
          />
        </ShimmerPlaceholder>

        <View style={{ width: width - 150, marginTop: 8 }}>
          <ShimmerPlaceholder
            LinearGradient={LinearGradient}
            visible={!props.loading}
            shimmerStyle={[{ borderRadius: 10, margin: 12 }]}
            shimmerColors={["#F8F8F8", "#E8E8E8", "#F8F8F8"]}
            isInteraction
          >
            <Text
              numberOfLines={2}
              style={{
                fontSize: 14,
                fontWeight: "bold",
                marginTop: 10,
                flexWrap: "wrap",
              }}
            >
              {!props?.title ? "" : props?.title}
            </Text>
          </ShimmerPlaceholder>

          <ShimmerPlaceholder
            LinearGradient={LinearGradient}
            visible={!props.loading}
            shimmerStyle={[{ borderRadius: 10, margin: 12 }]}
            shimmerColors={["#F8F8F8", "#E8E8E8", "#F8F8F8"]}
            isInteraction
          >
            <Text style={{ opacity: 0.3, marginTop: 8 }} numberOfLines={1}>
              Author: Jack
            </Text>
          </ShimmerPlaceholder>
          <ShimmerPlaceholder
            LinearGradient={LinearGradient}
            visible={!props.loading}
            shimmerStyle={[{ borderRadius: 10, margin: 12 }]}
            shimmerColors={["#F8F8F8", "#E8E8E8", "#F8F8F8"]}
            isInteraction
          >
            <Text
              style={{
                fontSize: 14,
                fontWeight: "400",
                opacity: 0.8,
                marginTop: 10,
                marginRight: 8,
                lineHeight: 18,
              }}
              numberOfLines={2.5}
            >
              {!props.description ? "" : props.description}
            </Text>
          </ShimmerPlaceholder>
        </View>
      </View>
    </ViewCard>
  );
};

export default Card;
