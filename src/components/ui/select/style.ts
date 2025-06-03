import { styled } from "@/styles/stitches.config";

export const SelectWrapper = styled("div", {
  position: "relative",
  width: "355px",

  "@mobile": {
    width: "100%"
  }
});

export const StyledSelect = styled("select", {
  width: "100%",
  padding: "14px 16px",
  border: "1px solid $primary",
  borderRadius: 8,
  appearance: "none",
  color: "$gray-500",
  fontSize: "$body",

  

  "&:focus": {
    outline: "none",
    borderColor: "$green",
  },

  ".option-active": {
    background: "$green-light",
    fontWeight: 600,
    fontSize: "$body",
    color: "$gray-500",
  },
});

export const IconWrapper = styled("div", {
  position: "absolute",
  top: "50%",
  right: "16px",
  transform: "translateY(-50%)",
  pointerEvents: "none",
});
