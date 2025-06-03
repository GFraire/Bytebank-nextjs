export class Utils {
  static formatBrStringToNumber(value: string): number {
    const normalized = value.replace(/\./g, "").replace(",", ".");
    return parseFloat(normalized);
  }

  static formatNumberToBrString(value: number) {
    return value.toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }
}
