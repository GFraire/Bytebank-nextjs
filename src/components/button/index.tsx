import { ReactNode } from "react";
import { BaseButton } from "./style";

interface ButtonProps {
  children: ReactNode;
  outlined?: boolean;
}

export function Button({ children, outlined }: ButtonProps) {
  return <BaseButton outlined={outlined}>{children}</BaseButton>;
}
