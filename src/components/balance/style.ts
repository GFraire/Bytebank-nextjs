import { styled } from "@stitches";
import { cursorTo } from "readline";

export const BalanceContainer = styled("div", {
  display: "flex",
  background: "$primary",
  color: "$white",
  padding: 16,
  borderRadius: 8,
  justifyContent: "space-between",
  height: '100%',

  ".hello": {
    display: "flex",
    flexDirection: "column",
    gap: 24,

    h4: {
      fontWeight: 600,
      fontSize: 25,
    },

    span: {
      fontSize: 13,
    },
  },
});

export const BalanceValue = styled("div", {
  display: "flex",
  flexDirection: "column",
  marginTop: 90,
  marginRight: 100,
  gap: 16,
  minWidth: 180,

  ".action": {
    display: "flex",
    alignItems: "center",
    gap: 24,
    paddingBottom: 16,
    borderBottom: "solid 2px $secondary",

    span: {
      fontSize: 20,
      fontWeight: 600,
    },

    img: {
      cursor: "pointer"
    }
  },

  ".value": {
    display: "flex",
    flexDirection: "column",
    gap: 8,

    "h3": {
      fontSize: 31,
      fontWeight: 400
    }
  }
});
