import React, { useRef, useState } from "react";
import {
  Animated,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import PagerView from "react-native-pager-view";

import colors from "../config/colors";
import defaultStyles from "../config/defaultStyles";
import sizes from "../config/sizes";
import { getFontFamily } from "../utility/font";
import AppText from "./AppText";
import Avatar from "./Avatar";

function Post({}) {
  const [position, setPosition] = useState(1);

  return (
    <>
      <View style={styles.container}>
        <View style={styles.meta}>
          <TouchableOpacity activeOpacity={0.7} onPress={() => {}}>
            <Avatar image={require("../assets/avatar3.jpg")} size={50} />
          </TouchableOpacity>
          <View style={styles.metaRight}>
            <View style={defaultStyles.row}>
              <TouchableOpacity activeOpacity={0.6} onPress={() => {}}>
                <AppText style={styles.userName}>Ayoub Taouarda</AppText>
              </TouchableOpacity>
            </View>
            <AppText style={styles.time}>1hr</AppText>
          </View>
        </View>
      </View>
      <View>
        <View style={styles.sliderTextContainer}>
          <AppText style={styles.sliderText}>{position}/3</AppText>
        </View>
        <PagerView
          style={styles.slider}
          initialPage={0}
          onPageSelected={(event) =>
            setPosition(event.nativeEvent.position + 1)
          }
        >
          <View key="0">
            <Image
              style={styles.image}
              source={require("../assets/image1.jpg")}
            />
          </View>
          <View key="1">
            <Image
              style={styles.image}
              source={require("../assets/image2.jpg")}
            />
          </View>
          <View key="2">
            <Image
              style={styles.image}
              source={require("../assets/image3.jpg")}
            />
          </View>
        </PagerView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: sizes.sectionPaddingHorizontal,
  },
  meta: {
    flexDirection: "row",
    marginBottom: sizes.sectionPaddingVertical,
  },
  metaRight: {
    marginLeft: 20,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  userName: {
    fontFamily: getFontFamily("600"),
  },
  time: {
    fontFamily: getFontFamily("500"),
    color: colors.mediumGrey,
  },
  slider: {
    width: "100%",
    height: 250,
  },
  sliderTextContainer: {
    position: "absolute",
    bottom: 15,
    left: 15,
    zIndex: 1,
  },
  sliderText: {
    color: colors.white,
    textShadowColor: colors.black,
    textShadowRadius: 2,
    fontFamily: getFontFamily("600"),
    fontSize: 14,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});

export default Post;
