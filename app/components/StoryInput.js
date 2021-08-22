import React, { useEffect } from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import * as ImagePicker from "expo-image-picker";

import defaultStyles from "../config/defaultStyles";
import AppText from "./AppText";
import colors from "../config/colors";
import IconButton from "./IconButton";
import sizes from "../config/sizes";

function StoryInput({ onChange }) {
  const requestPermission = async () => {
    const result = await ImagePicker.getMediaLibraryPermissionsAsync();
    if (!result.granted) {
      const { granted } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (!granted)
        alert("You have to give permission in order to add a story");
    }
  };

  useEffect(() => {
    requestPermission();
  }, []);

  const handlePress = async () => {
    await requestPermission();
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 0.5,
    });
    if (result.cancelled) return;
    onChange(result.uri);
  };

  return (
    <TouchableOpacity onPress={handlePress} activeOpacity={0.8}>
      <View style={[defaultStyles.storyContainer, styles.container]}>
        <Image
          source={require("../assets/storySample.jpg")}
          style={styles.image}
        />
        <View style={styles.darken} />
        <View style={styles.content}>
          <IconButton onPress={handlePress} />
          <AppText style={defaultStyles.storyText}>Add story</AppText>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginLeft: sizes.sectionPaddingHorizontal,
  },
  content: {
    position: "absolute",
    bottom: 20,
    width: "90%",
    alignItems: "center",
  },
  darken: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: colors.black + "50",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});

export default StoryInput;
