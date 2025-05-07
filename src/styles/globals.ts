import { globalCss } from "./stitches.config";

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },

  body: {
    backgroundColor: "$background",
    "-webkit-font-smoothing": "antialiased",
  },

  'body, input, textarea, button': {
    fontFamily: "Inter",
    fontWeight: 400
  }
});
