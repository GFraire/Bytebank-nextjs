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
      fontWeight: "bold"
    }
  },
});