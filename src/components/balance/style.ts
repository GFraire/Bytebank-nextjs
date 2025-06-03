import { styled } from "@stitches";

export const BalanceContainer = styled("div", {
  display: "flex",
  background: "$primary",
  color: "$white",
  padding: 16,
  borderRadius: 8,
  justifyContent: "space-between",
  height: "100%",

  "@tablet": {
    minHeight: "400px",

    backgroundImage: "url('/tablet-balance-background.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },

  ".hello": {
    display: "flex",
    flexDirection: "column",
    gap: 24,

    h4: {
      fontWeight: 600,
      fontSize: "$display-lg",
    },

    span: {
      fontSize: "$caption-sm",
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
      fontSize: "$display-md",
      fontWeight: 600,
    },

    img: {
      cursor: "pointer",
    },
  },

  ".value": {
    display: "flex",
    flexDirection: "column",
    gap: 8,

    h3: {
      fontSize: "$heading-sm",
      fontWeight: 400,
    },
  },
});
