const weights = {
  100: "Thin",
  200: "ExtraLight",
  300: "Light",
  400: "Regular",
  500: "Medium",
  600: "SemiBold",
  700: "Bold",
  800: "ExtraBold",
  900: "Black",
};
const getFontFamily = (fontWeight = "400") =>
  `Montserrat_${fontWeight}${weights[fontWeight]}`;

export { getFontFamily };
