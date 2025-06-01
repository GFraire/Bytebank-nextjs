import { styled } from "@/styles/stitches.config";

export const TransactionContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: 32,
  height: "100%",

  backgroundImage: "url('/transaction-background.jpg')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",

  borderRadius: 8,
  padding: 16,

  color: "black",

  h4: {
    fontWeight: 600,
    fontSize: "$display-lg",
  },

  ".value": {
    display: "flex",
    flexDirection: "column",
    gap: 8,

    span: {
      fontWeight: 600,
    },
  },
});
