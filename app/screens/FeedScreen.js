import React from "react";
import { StyleSheet, View } from "react-native";

import Stories from "../components/Stories";
import colors from "../config/colors";
import Screen from "../components/Screen";
import PostForm from "../components/PostForm";
import sizes from "../config/sizes";

function FeedScreen({}) {
  return (
    <Screen>
      <View style={styles.section}>
        <Stories />
      </View>
      <View style={[styles.section, styles.noPadding]}>
        <PostForm />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  section: {
    backgroundColor: colors.white,
    paddingVertical: sizes.sectionPaddingVertical,
    marginTop: 10,
  },
  noPadding: {
    paddingVertical: 0,
  },
});

export default FeedScreen;
