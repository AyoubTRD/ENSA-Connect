import React from "react";
import { Text } from "react-native";

import defaultStyles from "../config/defaultStyles";

function AppText({ children, style = {}, ...props }) {
  return (
    <Text {...props} style={[defaultStyles.text, style]}>
      {children}
    </Text>
  );
}

export default AppText;
