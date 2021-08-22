import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";

import colors from "../config/colors";

function IconButton({ style, backgroundColor = colors.white, color, onPress }) {
  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor }, style]}
      activeOpacity={0.8}
      onPress={onPress}
    >
      <Entypo name="plus" size={25} color={color || colors.primary} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 45,
    height: 45,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
});

export default IconButton;
