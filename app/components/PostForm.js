import React from "react";
import { StyleSheet, View, TextInput, TouchableOpacity } from "react-native";
import colors from "../config/colors";
import defaultStyles from "../config/defaultStyles";
import { Feather, Ionicons } from "@expo/vector-icons";

import sizes from "../config/sizes";
import { getFontFamily } from "../utility/font";
import AppButton from "./AppButton";
import AppForm from "./forms/AppForm";
import AppFormField from "./forms/AppFormField";
import Separator from "./Separator";
import AppText from "./AppText";

function PostForm({}) {
  return (
    <AppForm
      initialValues={{
        content: "",
        images: [],
        videos: [],
        files: [],
      }}
    >
      <View style={styles.container}>
        <View style={styles.fieldContainer}>
          <AppFormField
            name="content"
            placeholder="Hi everyone!"
            style={styles.fieldInput}
          />
          <AppButton style={styles.fieldButton}>Post</AppButton>
        </View>
      </View>
      <Separator style={styles.separator} />
      <View style={styles.container}>
        <View style={styles.uploadButtons}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={[styles.uploadButton, styles.uploadSeparator]}
          >
            <Ionicons
              name="image"
              style={styles.uploadIcon}
              color={colors.pink}
            />
            <AppText style={styles.uploadText}>Photo</AppText>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            style={[styles.uploadButton, styles.uploadSeparator]}
          >
            <Ionicons
              name="videocam"
              style={styles.uploadIcon}
              color={colors.primary}
            />
            <AppText style={styles.uploadText}>Video</AppText>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8} style={styles.uploadButton}>
            <Feather
              name="file-text"
              style={styles.uploadIcon}
              color={colors.orange}
            />
            <AppText style={styles.uploadText}>File</AppText>
          </TouchableOpacity>
        </View>
      </View>
    </AppForm>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: sizes.sectionPaddingHorizontal,
    paddingVertical: sizes.sectionPaddingVertical,
  },
  fieldContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  fieldButton: {
    width: "33%",
  },
  fieldInput: {
    width: "65%",
  },
  uploadButtons: {
    flexDirection: "row",
  },
  uploadButton: {
    width: "33.33%",
    height: 34,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  uploadSeparator: {
    borderRightWidth: 3,
    borderRightColor: colors.lightGrey2,
  },
  uploadIcon: {
    fontSize: 20,
    marginRight: 10,
  },
  uploadText: {
    fontFamily: getFontFamily("600"),
    color: colors.mediumGrey,
  },
});

export default PostForm;
