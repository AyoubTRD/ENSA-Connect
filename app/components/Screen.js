import React from "react";
import { StyleSheet, View } from "react-native";
import Constants from "expo-constants";

import colors from "../config/colors";
import TopBar from "./TopBar";

function Screen({ children }) {
  return (
    <View style={styles.container}>
      <TopBar />
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightGrey,
    paddingTop: Constants.statusBarHeight,
  },
});

export default Screen;
