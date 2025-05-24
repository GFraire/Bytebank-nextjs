import { MenuTypes } from "@/pages/account";
import { SideBarContainer } from "./style";

interface SideBarProps {
  menuItemActive: MenuTypes;
  onSetMenuItemActive: (item: MenuTypes) => void;
}

interface MenuItem {
  title: string;
  type: MenuTypes;
}

export function SideBar({ menuItemActive, onSetMenuItemActive }: SideBarProps) {
  const items: MenuItem[] = [
    { title: "Início", type: "home" },
    { title: "Transferências", type: "transfers" },
    { title: "Investimentos", type: "investments" },
    { title: "Outros serviços", type: "services" },
  ];

  return (
    <SideBarContainer>
      {items.map((item, index) => {
        const hasBorderBottom =
          index !== items.length - 1 ? "border-bottom" : "";

        const isActive = item.type === menuItemActive ? "active" : "";

        const className = [
          hasBorderBottom ? "border-bottom" : null,
          isActive ? "active" : null,
        ]
          .filter(Boolean)
          .join(" ");

        return (
          <span
            key={item.type}
            className={className}
            onClick={() => onSetMenuItemActive(item.type)}
          >
            {item.title}
          </span>
        );
      })}
    </SideBarContainer>
  );
}
