import { action, makeAutoObservable, observable } from "mobx";
import RootStore from "../RootStore";
import AsyncStorage from "@react-native-async-storage/async-storage";

export class AuthStore {
  rootStore: typeof RootStore;

  @observable isLoggedIn: boolean = false;
  @observable userProfile: ITokenData;
  constructor(rootStore: typeof RootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
  }

  @action
  /**
   * Set the isLoggedIn flag to true, indicating that the user is logged in.
   */
  setIsLogging() {
    this.isLoggedIn = true;
  }

  @action
  /**
   * Saves the user token data to AsyncStorage.
   * @param value The token data to be saved.
   */
  saveUserToken = async (value: ITokenData) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("my-key", jsonValue);
      this.setIsLogging();
    } catch (error) {
      this.checkoutUser();
      console.log("error saving user data");
    }
  };

  @action
  /**
   * Saves the user profile data to the userProfile property.
   * @param data - The user profile data to be saved.
   */
  saveUserProfileData(data: ITokenData) {
    this.userProfile = data;
  }

  @action
  /**
   * Asynchronously retrieves the user token from AsyncStorage.
   * Parses the JSON value retrieved and saves the user profile data.
   * Sets the logging status based on the presence of the JSON value.
   *
   * @returns {Object|null} The parsed JSON value representing the user token, or null if not found.
   */
  getUserToken = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("my-key");
      this.saveUserProfileData(JSON.parse(jsonValue));
      if (jsonValue) {
        this.setIsLogging();
      }
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (error) {
      this.checkoutUser();
      console.log("error getting user data");
    }
  };

  @action
  /**
   * Logs out the user by setting the isLoggedIn flag to false.
   */
  checkoutUser() {
    this.isLoggedIn = false;
  }

  @action
  /**
   * Asynchronously clears the AsyncStorage and calls the checkoutUser function.
   * Logs an error message if an error occurs during the logout process.
   */
  logout = async () => {
    try {
      await AsyncStorage.clear();
      this.checkoutUser();
    } catch (e) {
      // clear error
      console.log("error while logout");
    }

    console.log("Done...");
  };
}
