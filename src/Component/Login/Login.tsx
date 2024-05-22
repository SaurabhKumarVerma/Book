import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import React, { PropsWithChildren } from "react";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import auth from "@react-native-firebase/auth";
import LottieView from "lottie-react-native";
import { color } from "../../Themes/color";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { inject, observer } from "mobx-react";
import { PropsWithStore } from "../../Store/RootStore";
import Animated, { FadeInDown } from "react-native-reanimated";

const Login = (props: PropsWithStore<PropsWithChildren>) => {
  const AnimatedPressable = Animated.createAnimatedComponent(Pressable);
  const { width, height } = useWindowDimensions();

  const { authStore } = props.rootStore;

  async function onGoogleButtonPress() {
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });

    const idToken = await GoogleSignin.signIn();

    const googleCredential = auth.GoogleAuthProvider.credential(
      idToken.idToken
    );

    await authStore.saveUserToken(idToken as ITokenData);
    return auth().signInWithCredential(googleCredential);
  }
  return (
    <ImageBackground
      source={require("../../../assets/logIn.png")}
      resizeMode="cover"
      style={{ width: width, height: height }}
    >
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <LottieView
          source={require("../../../assets/Lottie/Login.json")}
          autoPlay
          loop
          style={{ width: width, aspectRatio: 1 }}
        />
        <View>
          <AnimatedPressable
            onPress={onGoogleButtonPress}
            style={styles.container}
            entering={FadeInDown.delay(700)}
          >
            <FontAwesome6
              name="square-google-plus"
              size={34}
              color={color.lightblue}
            />
            <Text style={styles.textStyle}>Sign in with Google</Text>
          </AnimatedPressable>
        </View>
      </View>
    </ImageBackground>
  );
};

export default inject("rootStore")(observer(Login));

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.black,
    padding: 6,
    paddingHorizontal: 20,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  textStyle: {
    fontSize: 18,
    fontWeight: "600",
    color: color.white,
    marginHorizontal: 10,
  },
});
