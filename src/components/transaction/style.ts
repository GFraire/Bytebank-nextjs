import { styled } from "@/styles/stitches.config";

export const TransactionContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: 32,
  height: "100%",
  backgroundColor: "$gray-300",

  backgroundImage: "url('/transaction-background.jpg')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",

  borderRadius: 8,
  padding: 16,

  color: "black",

  "@tablet": {
    minHeight: 470,
    backgroundImage: "url('/tablet-transactions-background.png')",
    backgroundSize: "contain",
  },

  "@mobile": {
    alignItems: "center",
    minHeight: 550,
    backgroundImage: "url('/mobile-transactions-background.png')",
    backgroundSize: "contain",
  },

  h4: {
    fontWeight: 600,
    fontSize: "$display-lg",

    "@mobile": {
      alignSelf: "start",
    },
  },

  ".value": {
    display: "flex",
    flexDirection: "column",
    gap: 8,

    "@mobile": {
      alignItems: "center",
    },

    span: {
      fontWeight: 600,
    },
  },
});
