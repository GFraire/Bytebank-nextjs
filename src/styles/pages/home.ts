import { styled } from "@stitches";

export const HomeContainer = styled("div", {
  width: "100%",
  minHeight: "100%",
  display: "flex",
  flexDirection: "column",
});

export const HomeContent = styled("div", {
  backgroundImage: "linear-gradient(180deg, $primary 0%, $white 100%)",
  height: "100%",
  paddingBottom: 150,
});

export const HeaderContainer = styled("header", {
  background: "black",

  ".logo": {
    display: "block",

    "@tablet": {
      display: "none",
    },
  },

  ".logo-mini-tablet": {
    display: "none",
    marginRight: 0,

    "@tablet": {
      display: "block",
    },
  },
});

export const HeaderContent = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: 24,
  maxWidth: "calc(1200px + 48px)",
  margin: "auto",

  div: {
    display: "flex",
    alignItems: "center",

    "&:first-child": {
      gap: 40,

      "@tablet": {
        gap: 8,
      },
    },

    "&:last-child": {
      gap: 24,
      "@tablet": {
        gap: 12,
      },
    },
  },

  img: {
    objectFit: "cover",
    marginRight: 20,
  },

  span: {
    color: "$green",
    fontSize: "$subtitle",
  },
});

export const MainContainer = styled("main", {
  maxWidth: 1200,
  marginRight: "auto",
  marginLeft: "auto",
  paddingRight: 24,
  paddingLeft: 24,
});

export const HeroSection = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  height: "100%",
  marginTop: 24,

  "@tablet": {
    flexDirection: "column",
    gap: 16,
    marginTop: 40,
  },

  p: {
    maxWidth: 434,
    fontSize: "$display-xl",
    fontWeight: 600,
  },

  img: {
    "@tablet": {
      width: 520,
      height: 390,
    },
  },
});

export const AdvantageSection = styled("div", {
  display: "flex",
  flexDirection: "column",
  marginTop: 40,
  gap: 40,

  h3: {
    display: "block",
    fontSize: "$display-lg",
    fontWeight: 700,
    textAlign: "center",
  },

  ".advantage-content": {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: 24,

    "@tablet": {
      gridTemplateColumns: "1fr 1fr",
    },
  },
});

export const AdvantageCard = styled("div", {
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  gap: 16,

  span: {
    color: "$green",
    fontSize: "$display-md",
    fontWeight: 700,
    textAlign: "center",
  },

  p: {
    fontSize: "$body",
    color: "$gray-600",
    textAlign: "center",
  },
});

export const FooterContainer = styled("footer", {
  background: "black",
});

export const FooterContent = styled("div", {
  display: "flex",
  justifyContent: "space-between",

  maxWidth: 1200,
  marginRight: "auto",
  marginLeft: "auto",

  color: "$white",
  paddingTop: 44,
  paddingBottom: 44,
  paddingRight: 24,
  paddingLeft: 24,

  ".infos": {
    display: "flex",
    flexDirection: "column",
    gap: 16,
  },

  ".infos-icons": {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 24,

    div: {
      display: "flex",
      gap: 24,
    },
  },
});
