import { styled } from "@stitches";

export const AccountContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: 24,
  width: "100%",
  flexGrow: 1,
});

export const HeaderContainer = styled("header", {
  background: "$primary",
  paddingTop: 24,
  paddingBottom: 24,
});

export const HeaderContent = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "end",
  gap: 32,

  paddingLeft: 16,
  paddingRight: 16,

  maxWidth: 1232,
  marginLeft: "auto",
  marginRight: "auto",

  color: "$white",

  "@tablet": {
    paddingLeft: 60,
    paddingRight: 60,
  },

  "@mobile": {
    paddingLeft: 16,
    paddingRight: 16,
  },
});

export const Content = styled("div", {
  display: "flex",
  gap: 24,
  maxWidth: 1232,
  paddingLeft: 16,
  paddingRight: 16,
  marginLeft: "auto",
  marginRight: "auto",
  paddingBottom: 24,
  height: "100%",
  width: "100%",

  "@tablet": {
    flexDirection: "column",
    paddingLeft: 60,
    paddingRight: 60,
  },

  "@mobile": {
    paddingLeft: 16,
    paddingRight: 16,
  },
});

export const Main = styled("main", {
  display: "flex",
  flexDirection: "column",
  gap: 24,
  width: "100%",
});
