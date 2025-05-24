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

  maxWidth: 1200,
  marginLeft: "auto",
  marginRight: "auto",

  color: "$white",
});

export const Content = styled("div", {
  display: "flex",
  gap: 24,
  maxWidth: 1200,
  marginLeft: "auto",
  marginRight: "auto",
  paddingBottom: 24,
  height: "100%",
  width: "100%",
});

export const Main = styled("main", {
  display: "flex",
  flexDirection: "column",
  gap: 24,
  width: "100%",
});


