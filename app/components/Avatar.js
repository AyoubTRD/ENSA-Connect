import React from "react";
import { StyleSheet, Image } from "react-native";

function Avatar({ image, size = 40, style }) {
  return (
    <Image
      source={image}
      style={[styles.image, { width: size, height: size }, style]}
    />
  );
}

const styles = StyleSheet.create({
  image: {
    borderRadius: 5,
    width: 40,
    height: 40,
  },
});

export default Avatar;
