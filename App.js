import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import {
  useFonts,
  Montserrat_100Thin,
  Montserrat_200ExtraLight,
  Montserrat_300Light,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
  Montserrat_800ExtraBold,
  Montserrat_900Black,
} from "@expo-google-fonts/montserrat";
import AppLoading from "expo-app-loading";

import AppText from "./app/components/AppText";
import Screen from "./app/components/Screen";
import colors from "./app/config/colors";
import FeedScreen from "./app/screens/FeedScreen";

export default function App() {
  const [fontsLoaded, error] = useFonts({
    Montserrat_100Thin,
    Montserrat_200ExtraLight,
    Montserrat_300Light,
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
    Montserrat_800ExtraBold,
    Montserrat_900Black,
  });

  if (!fontsLoaded) return <AppLoading />;

  return (
    <>
      <StatusBar style="light" backgroundColor={colors.primary} />
      <FeedScreen />
    </>
  );
}

const styles = StyleSheet.create({});
