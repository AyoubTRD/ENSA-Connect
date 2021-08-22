import React from "react";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";

import colors from "../config/colors";
import defaultStyles from "../config/defaultStyles";
import { getFontFamily } from "../utility/font";
import AppText from "./AppText";

function TopBar({}) {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Feather name="search" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Search"
          placeholderTextColor={colors.lightGrey}
        />
      </View>
      <TouchableOpacity onPress={() => {}} style={styles.iconContainer}>
        <Ionicons name="mail" style={styles.icon} />
        <View style={styles.badge}>
          <AppText style={styles.badgeText}>12</AppText>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    height: 140,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 30,
  },
  iconContainer: {
    height: 63,
    width: 63,
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.white + "30",
  },
  inputContainer: {
    width: "78%",
    height: 63,
    paddingHorizontal: 25,
    borderRadius: 40,
    backgroundColor: colors.white + "30",
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    ...defaultStyles.text,
    color: colors.lightGrey,
    flex: 1,
    height: "100%",
    fontFamily: getFontFamily("500"),
    marginLeft: 10,
  },
  icon: {
    color: colors.white,
    fontSize: 28,
  },
  badge: {
    position: "absolute",
    top: 0,
    right: 0,
    width: 25,
    height: 25,
    borderRadius: 50,
    backgroundColor: colors.white,
    borderWidth: 2,
    borderColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  badgeText: {
    fontSize: 12,
    fontFamily: getFontFamily("500"),
    color: colors.primary,
  },
});

export default TopBar;
