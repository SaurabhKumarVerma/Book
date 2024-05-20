import { StyleSheet, Text, View, useWindowDimensions } from "react-native";
import { SCREEN_WIDTH } from "../../Constant/Screen";
import LottieView from "lottie-react-native";
type Props = {
  screen: any;
};

const RenderItem = ({ screen }: Props) => {
  const { width } = useWindowDimensions();
  return (
    <View style={styles.container}>
      <LottieView
        source={screen.animation}
        autoPlay
        loop
        style={{ width: width - 120, aspectRatio: 0.8 }}
      />
      <Text style={styles.title}>{screen.text}</Text>
      <Text style={[styles.description, { width: width - 32 }]}>
        {screen.description}
      </Text>
    </View>
  );
};

export default RenderItem;

const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "#000000",
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 50,
  },
  description: {
    color: "#7598a5",
    textAlign: "center",
    marginVertical: 16,
    lineHeight: 22,
    flexWrap: "wrap",
  },
  header: {
    alignSelf: "flex-end",
    margin: 10,
    marginBottom: 10,
  },
});

// export default RenderItem;
