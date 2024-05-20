import { View, StyleSheet, SafeAreaView, FlatList } from "react-native";
import Animated, {
  runOnJS,
  useAnimatedRef,
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";
import RenderItem from "./RenderItem";
import data from "./data";
import { useState } from "react";
import { SCREEN_WIDTH } from "../../Constant/Screen";
import Paginator from "./Pagination";
import CircularButton from "./CircularButton";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../types/react-navigation";
import { ScreenName } from "../../Navigatator/ScreenName/ScreenName";

const MAX_LENGHT = data.length;

export const Onboarding = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const aref = useAnimatedRef<Animated.ScrollView>();
  const [index, setIndex] = useState(0);
  const scrollX = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler((event) => {
    scrollX.value = event.contentOffset.x;
    runOnJS(setIndex)(Math.round(event.contentOffset.x / SCREEN_WIDTH));
  });
  const onPressButton = () => {
    if (index !== MAX_LENGHT - 1) {
      aref.current?.scrollTo({
        x: index > 0 ? SCREEN_WIDTH * (index + 1) : SCREEN_WIDTH,
        y: 0,
        animated: true,
      });
      setIndex(index + 1);
    } else if (index === 2) {
      navigation.navigate(ScreenName.LOGIN);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Animated.ScrollView
        onScroll={scrollHandler}
        ref={aref}
        horizontal
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        pagingEnabled
      >
        {data.map((screen, index) => {
          return <RenderItem screen={screen} key={index.toString()} />;
        })}
      </Animated.ScrollView>
      <View>
        <View style={{ marginVertical: 20 }}>
          <Paginator itemsLength={data.length} scrollX={scrollX} />
        </View>

        <CircularButton
          screensLenght={data.length}
          onPress={onPressButton}
          index={index}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    marginBottom: 20,
  },
});
