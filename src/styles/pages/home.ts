import { styled } from "@stitches";

export const Header = styled("header", {
  background: "black",
});

export const HeaderContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: 24,
  maxWidth: 1200,
  margin: "auto",

  div: {
    display: "flex",
    alignItems: "center",

    "&:first-child": {
      gap: 40,
    },

    "&:last-child": {
      gap: 24,
    },
  },

  img: {
    objectFit: "cover",
    marginRight: 20
  },

  span: {
    color: "$green",
    fontSize: "$subtitle",
  },

  button: {
    height: 48,
    width: 180,
    borderRadius: 8,
    background: "$green",
    border: "none",
    fontSize: "$body",
    fontWeight: 600,
    cursor: "pointer",
    color: "$white",

    "&.outlined": {
      backgroundColor: "transparent",
      border: "2px solid $green",
      color: "$green"
    }
  },
});
