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
});