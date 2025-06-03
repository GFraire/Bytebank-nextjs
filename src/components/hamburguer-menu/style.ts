import { styled } from "@stitches";

export const MenuButton = styled("button", {
  background: "none",
  border: "none",
  cursor: "pointer",
  zIndex: 1001,
});

export const Overlay = styled("div", {
  position: "fixed",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  backgroundColor: "rgba(0,0,0,0.4)",
  zIndex: 1000,
  display: "none",

  variants: {
    open: {
      true: {
        display: "block",
      },
    },
  },
});

export const Sidebar = styled("nav", {
  position: "fixed",
  top: 0,
  left: 0,
  height: "100vh",
  width: "200px",
  backgroundColor: "$background",
  boxShadow: "-4px 0 10px rgba(0,0,0,0.1)",
  padding: "24px",
  transform: "translateX(-100%)",
  transition: "transform 0.3s ease-in-out",
  zIndex: 1001,

  display: "flex",
  flexDirection: "column",
  gap: "20px",

  variants: {
    open: {
      true: {
        transform: "translateX(0%)",
      },
    },
  },
});

export const MenuItem = styled("div", {
  display: "flex",
  justifyContent: "center",
  fontSize: "$subtitle",
  color: "black",
  paddingBottom: 16,

  "&:not(:last-child)": {
    borderBottom: "1px solid black",
  },

  variants: {
    disabled: {
      true: {
        cursor: "not-allowed",
        opacity: "0.5",
      },
    },
    active: {
      true: {
        borderBottom: "1px solid $green !important",
        color: "$secondary",
        fontWeight: "bold"
      },
    },
  },
});
