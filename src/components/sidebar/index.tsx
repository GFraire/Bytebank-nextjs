import { MenuTypes } from "@/pages/account";
import { SideBarContainer } from "./style";

interface SideBarProps {
  menuItemActive: MenuTypes;
  onSetMenuItemActive: (item: MenuTypes, isDisabled: boolean) => void;
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

        const isDisabled = index !== 0 ? true : false;
        const isActive = item.type === menuItemActive ? true : false;

        const className = [
          hasBorderBottom ? "border-bottom" : null,
          isActive ? 'active' : null,
          isDisabled ? 'disabled' : null,
        ]
          .filter(Boolean)
          .join(" ");

        return (
          <span
            key={item.type}
            className={className}
            onClick={() => onSetMenuItemActive(item.type, isDisabled)}
          >
            {item.title}
          </span>
        );
      })}
    </SideBarContainer>
  );
}
