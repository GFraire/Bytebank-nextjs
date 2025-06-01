import { ButtonHTMLAttributes, ReactNode } from "react";
import { BaseButton } from "./style";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  outlined?: boolean;
  primary?: boolean;
  icon?: boolean
}

export function Button({ children, ...props }: ButtonProps) {
  return <BaseButton {...props}>{children}</BaseButton>;
}
