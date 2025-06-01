import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

export function getCurrentDate(pattern: string) {
  const currentDate = new Date();

  return format(currentDate, pattern, { locale: ptBR });
}

export function getFormattedDate(dateP: string, pattern: string) {
  const date = new Date(dateP);

  return format(date, pattern, { locale: ptBR });
}