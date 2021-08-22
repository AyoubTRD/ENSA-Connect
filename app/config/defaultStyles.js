import { getFontFamily } from "../utility/font";
import colors from "./colors";

export default {
  text: {
    fontFamily: getFontFamily(),
    color: colors.black,
    fontSize: 16,
    letterSpacing: 0.5,
  },
  storyContainer: {
    width: 140,
    height: "100%",
    overflow: "hidden",
    borderRadius: 15,
    marginRight: 15,
  },
  storyText: {
    color: colors.white,

    fontSize: 15,
    fontFamily: getFontFamily("600"),
  },
};
