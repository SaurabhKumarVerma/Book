import {
  StackActions,
  createNavigationContainerRef,
} from "@react-navigation/native";

export const navigationRef = createNavigationContainerRef();

export function navigate(name: string, params?: object) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}

export function push(...args: any) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.push(...args));
  }
}

export function goBack() {
  if (navigationRef.isReady() && navigationRef.canGoBack()) {
    navigationRef.goBack();
  }
}

export function replace(name, params) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.replace(name, params));
  }
}

export function pop() {
  if (navigationRef.isReady() && navigationRef.canGoBack()) {
    navigationRef.dispatch(StackActions.pop());
  }
}

export function reset(index, routes) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.reset({ index, routes }));
  }
}
