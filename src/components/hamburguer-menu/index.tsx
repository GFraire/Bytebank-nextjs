import { useState } from "react";
import { MenuButton, MenuItem, Overlay, Sidebar } from "./style";
import { Menu, X } from "lucide-react";
import { theme } from "@stitches";

export function HamburgerMenu() {
  const [open, setOpen] = useState(false);
  const colors = theme.colors;

  return (
    <>
      <MenuButton onClick={() => setOpen(true)}>
        <Menu color={colors.secondary.value} size={32} />
      </MenuButton>

      <Overlay open={open} onClick={() => setOpen(false)} />

      <Sidebar open={open}>
        <MenuButton onClick={() => setOpen(false)} style={{ alignSelf: 'flex-end' }}>
          <X color={colors.green.value} size={24} />
        </MenuButton>

        <MenuItem active>Início</MenuItem>
        <MenuItem disabled>Transferências</MenuItem>
        <MenuItem disabled>Investimentos</MenuItem>
        <MenuItem disabled>Outros serviços</MenuItem>
      </Sidebar>
    </>
  );
}
