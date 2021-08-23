import { useEffect, useRef, useState } from "react";
import { Animated } from "react-native";

export default () => {
  const animation = useRef(new Animated.Value(0)).current;

  const animate = ({ toValue = 1, duration, easing, delay }) => {
    Animated.timing(animation, {
      toValue,
      duration,
      delay,
      easing,
      useNativeDriver: true,
    }).start();
  };

  return { animation, animate };
};
