import { styled } from "@stitches";

export const BaseButton = styled("button", {
  height: 48,
  width: 180,
  borderRadius: 8,
  background: "$green",
  border: "none",
  fontSize: "$body",
  fontWeight: 600,
  cursor: "pointer",
  color: "$white",

  variants: {
    outlined: {
      true: {
        backgroundColor: "transparent",
        border: "2px solid $green",
        color: "$green",
      },
    },
    disabled: {
      true: {
        opacity: "0.6",
        cursor: "not-allowed",
      },
    },
    primary: {
      true: {
        background: "$primary",
      },
    },
    icon: {
      true: {
        display: "flex",
        alignItems: "center",
        background: "none",
        height: "auto",
        width: "auto",
      },
    },
  },
});
