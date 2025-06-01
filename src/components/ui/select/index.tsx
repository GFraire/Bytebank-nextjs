import { AnimatePresence, motion } from "framer-motion";
import { IconWrapper, SelectWrapper, StyledSelect } from "./style";
import { useState } from "react";

export interface ISelectOption<T> {
  value: T;
  description: string;
}

interface ISelectProps<T> {
  options: ISelectOption<T>[];
  placeholder: string;
  setValue: (value: T) => void;
}

export function Select<T>({ options, placeholder, setValue }: ISelectProps<T>) {
  const [focused, setFocused] = useState(false);
  const [currentValue, setCurrentValue] = useState(String(options[0].value));

  function handleSetValue(event: React.ChangeEvent<HTMLSelectElement>) {
    setValue(event.target.value as unknown as T);
    setCurrentValue(event.target.value);
  }

  return (
    <SelectWrapper>
      <StyledSelect
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        defaultValue={currentValue}
        onChange={handleSetValue}
      >
        <option value="" disabled>
          {placeholder}
        </option>

        {options.map((option) => (
          <option
            key={String(option.value)}
            value={String(option.value)}
            className={option.value === currentValue ? "option-active" : ""}
          >
            {option.description}
          </option>
        ))}
      </StyledSelect>

      <IconWrapper>
        <AnimatePresence mode="wait" initial={false}>
          {focused ? (
            <motion.img
              key="up"
              src="/icons/arrow-up.svg"
              alt="Seta para cima"
              initial={{ opacity: 1, rotate: 180 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 1, rotate: 0 }}
              transition={{ duration: 0.2 }}
            />
          ) : (
            <motion.img
              key="down"
              src="/icons/arrow-down.svg"
              alt="Seta para baixo"
              initial={{ opacity: 1, rotate: 180 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 1, rotate: 0 }}
              transition={{ duration: 0.2 }}
            />
          )}
        </AnimatePresence>
      </IconWrapper>
    </SelectWrapper>
  );
}
