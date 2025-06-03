import { styled } from "@/styles/stitches.config";

export const StyledInput = styled("input", {
  width: "250px",
  padding: "13px 16px",
  border: "1px solid $primary",
  borderRadius: 8,
  color: "$gray-500",
  fontSize: "$body",
  textAlign: "center",

  "&:focus": {
    outline: "none",
    borderColor: "$green",
  },

  variants: {
    plain: {
      true: {
        width: "100%",
        padding: "unset",
        border: "none",
        background: "transparent",
        color: "black",
        textAlign: "start",
        fontWeight: "bold"
      },
    },
  },
});
