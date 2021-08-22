import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import colors from "../config/colors";
import sizes from "../config/sizes";
import { getFontFamily } from "../utility/font";
import AppText from "./AppText";

function AppButton({ children, onPress, style }) {
  return (
    <TouchableOpacity style={style} activeOpacity={0.8} onPress={onPress}>
      <View style={styles.container}>
        <AppText style={styles.text}>{children}</AppText>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    height: sizes.buttonHeight,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 3,
  },
  text: {
    color: colors.buttonWhite,
    fontFamily: getFontFamily("600"),
  },
});

export default AppButton;
