import { InputHTMLAttributes } from "react";
import { StyledInput } from "./style";

interface INumberInputProps extends InputHTMLAttributes<HTMLInputElement> {
  value: string;
  plain?: boolean
  setValue(value: string): void;
}

export function NumberInput({ value, setValue,...props }: INumberInputProps) {
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const input = e.target.value;

    // Permite digitar o "-" no começo
    if (input === "-") {
      setValue("-");
      return;
    }

    const isNegative = input.startsWith("-");

    const raw = input.replace(/\D/g, "");

    // Limita a 8 dígitos (5 inteiros + 2 decimais)
    const limited = raw.slice(0, 8);

    if (limited === "") {
      setValue(isNegative ? "-" : "");
      return;
    }

    const integerPart = limited.slice(0, -2) || "0";
    const decimalPart = limited.slice(-2);

    // Adiciona pontos como separadores de milhar
    const formattedInt = parseInt(integerPart, 10).toLocaleString("pt-BR");

    let formatted = `${formattedInt},${decimalPart}`;

    if (isNegative) {
      formatted = `-${formatted}`;
    }

    setValue(formatted);
  }

  return (
    <StyledInput
      type="text"
      inputMode="numeric"
      pattern="\d*"
      value={value}
      onChange={handleChange}
      placeholder="00,00"
      {...props}
    />
  );
}
