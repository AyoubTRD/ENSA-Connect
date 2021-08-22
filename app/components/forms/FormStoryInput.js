import { useFormikContext } from "formik";
import React from "react";
import { StyleSheet, View } from "react-native";

import StoryInput from "../StoryInput";

function FormStoryInput({ name }) {
  const { setFieldValue } = useFormikContext();

  return (
    <View style={styles.container}>
      <StoryInput onChange={(imageUri) => setFieldValue(name, imageUri)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default FormStoryInput;
