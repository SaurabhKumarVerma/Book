import { AnimationObject } from "react-native-reanimated";

export interface OnboardingData {
  id: number;
  animation: AnimationObject;
  text: string;
  description: string;
}
