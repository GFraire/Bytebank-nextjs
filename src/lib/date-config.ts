import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

export function getCurrentDate(pattern: string) {
  const currentDate = new Date();

  return format(currentDate, pattern, { locale: ptBR });
}
