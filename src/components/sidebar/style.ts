import { styled } from "@stitches";

export const SideBarContainer = styled("aside", {
  background: "$white",
  display: "flex",
  flexDirection: "column",
  minWidth: 180,

  padding: 16,
  paddingLeft: 24,
  paddingRight: 24,
  borderRadius: 8,

  height: "100%",

  "@tablet": {
    background: "transparent",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  span: {
    paddingTop: 16,
    paddingBottom: 16,
    textAlign: "center",
    cursor: "pointer",

    "&.border-bottom": {
      borderBottom: "1px solid $gray-600",
    },

    "&.active": {
      color: "$green",
      fontWeight: "bold",
    },

    "&.disabled": {
      opacity: 0.6,
      cursor: "not-allowed",
    },

    "@tablet": {
      flexGrow: 1,
      "&.border-bottom": {
        borderBottom: "none",
      },

      "&.active": {
        color: "$green",
        fontWeight: "bold",
        borderBottom: "1px solid $green",
      },
    },
  },
});
