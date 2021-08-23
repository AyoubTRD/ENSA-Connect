import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import colors from "../config/colors";
import defaultStyles from "../config/defaultStyles";
import sizes from "../config/sizes";
import { getFontFamily } from "../utility/font";
import AppText from "./AppText";
import Avatar from "./Avatar";

function Story({ user, image, isLast }) {
  return (
    <TouchableOpacity onPress={() => {}} activeOpacity={0.8}>
      <View
        style={[
          defaultStyles.storyContainer,
          {
            marginRight: isLast ? sizes.sectionPaddingHorizontal : 15,
          },
        ]}
      >
        <Image source={image} style={styles.image} />
        <Avatar image={user.image} style={styles.avatar} />
        <AppText
          style={[defaultStyles.storyText, styles.text]}
          numberOfLines={1}
        >
          {user.name}
        </AppText>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  avatar: {
    position: "absolute",
    top: 20,
    left: 20,
  },
  image: {
    resizeMode: "cover",
    width: "100%",
    height: "100%",
  },
  text: {
    position: "absolute",
    left: 20,
    bottom: 20,
    width: 100,
  },
});

export default Story;
