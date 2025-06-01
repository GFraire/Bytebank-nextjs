import { createStitches } from "@stitches/react";

export const { styled, globalCss, getCssText, theme } = createStitches({
  theme: {
    colors: {
      primary: "#004D61",
      secondary: "#FF5031",
      background: "#E4EDE3",
      error: "#BF1313",
      green: "#47A138",
      "green-light": "#E4EDE3",
      white: "#F5F5F5",
      "gray-500": "#444444",
      "gray-600": "#8B8B8B",
      "gray-700": "#767676",
    },
    fontSizes: {
      "heading-sm": "1.9375rem", // 31px
      "display-xl": "1.75rem", // 28px
      "display-lg": "1.5625rem", // 25px
      "display-md": "1.25rem", // 20px
      subtitle: "1.125rem", // 18px
      body: "1rem", // 16px
      "caption ": "0.875rem", // 14px
      "caption-sm ": "0.8125rem", // 13px
    },
  },
});
