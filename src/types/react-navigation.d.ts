import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ScreenName } from "../Navigatator/ScreenName/ScreenName";
import { IItems } from "./apiresponse.interface";
// Define the RootStackParamList type that contains the list of screens and their corresponding parameters

export type RootStackParamList = {
  [ScreenName.HOME]: undefined;
  [ScreenName.SEARCH]: undefined;
  [ScreenName.ROOT]: undefined;
  [ScreenName.DETAIL_SCREEN]: { detailItem: IItems };
};

export type UNAUTHORIZEDSTACKPARAMLIST = {
  [ScreenName.ONBOARDING]: undefined;
  [ScreenName.LOGIN]: undefined;
};
// Define the ScreenProps type that contains the props for each screen in the application

export type ScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

export type ScreenProps<T extends keyof UNAUTHORIZEDSTACKPARAMLIST> =
  NativeStackScreenProps<UNAUTHORIZEDSTACKPARAMLIST, T>;
