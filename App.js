import { StatusBar } from "expo-status-bar";
import { StyleSheet, NativeModules } from "react-native";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import Main from "./src/Main";
import { Provider } from "mobx-react";
import RootStore from "./src/Store/RootStore";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { navigationRef } from "./src/Navigatator/RootNavigation";
const { RNTwitterSignIn } = NativeModules;

GoogleSignin.configure({
  webClientId:
    "232834685037-op7s98umuc6u7plj73vgoapjge600pah.apps.googleusercontent.com",
  offlineAccess: false,
});

export default function App() {
  const [rootStore] = useState(RootStore);

  return (
    <GestureHandlerRootView style={styles.container}>
      <Provider rootStore={rootStore} {...rootStore}>
        <NavigationContainer ref={navigationRef}>
          <Main />
        </NavigationContainer>
      </Provider>
      <StatusBar style="auto" />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
