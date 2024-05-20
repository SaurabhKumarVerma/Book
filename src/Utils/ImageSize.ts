import { Image } from "react-native";

export const getImageSize = (uri) => {
  return new Promise((resolve, reject) => {
    Image.getSize(uri, (width, height) => {
      if (width && height) {
        resolve({ width, height });
      } else {
        reject(new Error("Failed to get image size"));
      }
    });
  });
};
