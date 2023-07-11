import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";
import { flattenObj } from "./objects";
import { space, breakpoints, colors } from "./tokens";

// breakpoint conditions
const responsiveProperties = defineProperties({
  conditions: {
    n: {},
    xs: { "@media": `screen and (min-width: ${breakpoints.xs})` },
    sm: { "@media": `screen and (min-width: ${breakpoints.sm})` },
    md: { "@media": `screen and (min-width: ${breakpoints.md})` },
    lg: { "@media": `screen and (min-width: ${breakpoints.lg})` },
    xl: { "@media": `screen and (min-width: ${breakpoints.xl})` },
  },
  defaultCondition: "n",
  properties: {
    display: ["none", "flex", "block", "inline"],
    // flex
    flexDirection: ["row", "column"],
    justifyContent: ["stretch", "flex-start", "center", "flex-end", "space-around", "space-between"],
    alignItems: ["stretch", "flex-start", "center", "flex-end"],
    // padding
    padding: space,
    paddingTop: space,
    paddingBottom: space,
    paddingLeft: space,
    paddingRight: space,
    // margin
    margin: space,
    marginTop: space,
    marginBottom: space,
    marginLeft: space,
    marginRight: space,
    // size
    width: space,
    height: space,
  },
  shorthands: {
    // padding shorthands
    paddingX: ["paddingLeft", "paddingRight"],
    paddingY: ["paddingTop", "paddingBottom"],
    px: ["paddingLeft", "paddingRight"],
    py: ["paddingTop", "paddingBottom"],
    p: ["padding"],
    pt: ["paddingTop"],
    pb: ["paddingBottom"],
    pr: ["paddingRight"],
    pl: ["paddingLeft"],
    // margin shorthands
    marginX: ["marginLeft", "marginRight"],
    marginY: ["marginTop", "marginBottom"],
    mx: ["marginLeft", "marginRight"],
    my: ["marginTop", "marginBottom"],
    m: ["margin"],
    mt: ["marginTop"],
    mb: ["marginBottom"],
    mr: ["marginRight"],
    ml: ["marginLeft"],
    // sizing
    w: ["width"],
    h: ["height"],
    size: ["width", "height"],
  },
});

// light mode / dark mode
const colorProperties = defineProperties({
  conditions: {
    lightMode: {
      "@media": "(prefers-color-scheme: light)",
    },
    darkMode: { "@media": "(prefers-color-scheme: dark)" },
  },
  defaultCondition: false,
  properties: {
    color: flattenObj(colors),
  },
});

export const sprinkles = createSprinkles(responsiveProperties, colorProperties);

export type Sprinkles = Parameters<typeof sprinkles>[0];
