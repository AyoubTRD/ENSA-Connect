import React, { useEffect, useRef } from "react";
import { Animated, ScrollView, StyleSheet, View } from "react-native";

import Stories from "../components/Stories";
import colors from "../config/colors";
import Screen from "../components/Screen";
import PostForm from "../components/PostForm";
import sizes from "../config/sizes";
import Post from "../components/Post";
import useAnimation from "../hooks/useAnimation";

function FeedScreen({}) {
  return (
    <Screen>
      <ScrollView>
        <View style={styles.section}>
          <Stories />
        </View>
        <View style={[styles.section, styles.noPadding]}>
          <PostForm />
        </View>
        <View style={styles.section}>
          <Post />
        </View>
      </ScrollView>
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
