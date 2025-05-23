import { createStitches } from "@stitches/react";

export const { styled, globalCss, getCssText, theme } = createStitches({
  theme: {
    colors: {
      primary: "#004D61",
      secondary: "#FF5031",
      background: "#E4EDE3",
      green: "#47A138",
      white: "#F5F5F5",
      "gray-600": "#8B8B8B",
      "gray-700": "#767676"
    },
    fontSizes: {
      "display-xl": "1.75rem",
      "display-lg": "1.5625rem",
      "display-md": "1.25rem",
      "subtitle": "1.125rem",
      "body": "1rem",
      "caption ": "0.875rem",
    }
  },
});
