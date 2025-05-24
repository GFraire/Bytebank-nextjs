import { ReactNode } from "react";
import { BaseButton } from "./style";

interface ButtonProps {
  children: ReactNode;
  outlined?: boolean;
  disabled?: boolean;
}

export function Button({ children, outlined, disabled }: ButtonProps) {
  return <BaseButton outlined={outlined} disabled={disabled}>{children}</BaseButton>;
}
