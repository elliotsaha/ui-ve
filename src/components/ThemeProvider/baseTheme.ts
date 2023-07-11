import { createTheme } from "@vanilla-extract/css";
import {
  breakpoints,
  colors,
  fonts,
  fontSizes,
  letterSpacings,
  lineHeights,
  space,
  container,
  radii,
  zIndices,
  borderWidths,
} from "@utils/tokens";

// baseTheme is the theme className string
export const [baseTheme, baseThemeVars] = createTheme({
  colors: {
    primary: colors.grape,
    secondary: colors.amber,
    ...colors,
  },
  space: space,
  fonts: fonts,
  fontSizes: fontSizes,
  lineHeights: lineHeights,
  letterSpacings: letterSpacings,
  breakpoints: breakpoints,
  container: container,
  radii: radii,
  zIndices: zIndices,
  borderWidths: borderWidths,
});
