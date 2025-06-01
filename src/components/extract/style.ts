import { styled } from "@stitches/react";

export const ExtractContainer = styled("div", {
  background: "$white",
  display: "flex",
  flexDirection: "column",
  minWidth: 282,
  height: "100%",

  padding: 24,
  paddingTop: 32,
  paddingBottom: 32,
  borderRadius: 8,
  gap: 24,

  ".header": {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    strong: {
      fontWeight: "bold",
      fontSize: "$display-lg",
    },

    div: {
      display: "flex",
      gap: 16,
    },

    ".icon": {
      padding: 8,
      background: "$primary",
      borderRadius: 99,
      cursor: "pointer",
    },
  },

  ".extract-items": {
    overflowY: "auto",
    display: "flex",
    flexDirection: "column",
    gap: 24,
    height: "650px",
  },
});

export const ExtractItemContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: 8,

  span: {
    fontSize: "$caption-sm",
    fontWeight: "600",
    color: "$green",
  },

  div: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    span: {
      fontSize: "$body",
      color: "black",
      fontWeight: "400",
    },

    ".date": {
      fontSize: "$caption-sm",
      color: "$gray-600",
      fontWeight: "400",
    },

    ".icon": {
      cursor: "pointer"
    }
  },

  ".divider": {
    height: "1px",
    background: "$green",
    opacity: 0.5,
    width: "75%",
  },
});
