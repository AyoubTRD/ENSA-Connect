import { useFormikContext } from "formik";
import React from "react";
import { StyleSheet, TextInput } from "react-native";

import colors from "../../config/colors";
import defaultStyles from "../../config/defaultStyles";
import sizes from "../../config/sizes";
import { getFontFamily } from "../../utility/font";

function AppFormField({ name, style, ...props }) {
  const { values, setFieldTouched, setFieldValue } = useFormikContext();

  return (
    <TextInput
      {...props}
      style={[defaultStyles.text, styles.input, style]}
      placeholderTextColor={colors.mediumGrey}
      value={values[name]}
      onChangeText={(value) => setFieldValue(name, value)}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: colors.lightGrey,
    height: sizes.buttonHeight,
    paddingHorizontal: 25,
    fontFamily: getFontFamily("600"),
    borderWidth: 3,
    borderColor: colors.lightGrey2,
    borderRadius: 4,
  },
});

export default AppFormField;
