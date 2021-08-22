import React from "react";
import { StyleSheet, View } from "react-native";
import colors from "../config/colors";

function Separator({ style, vertical = false }) {
  return (
    <View style={[vertical ? styles.vertical : styles.horizontal, style]} />
  );
}

const styles = StyleSheet.create({
  horizontal: {
    height: 2,
    backgroundColor: colors.lightGrey2,
    width: "100%",
  },
});

export default Separator;
