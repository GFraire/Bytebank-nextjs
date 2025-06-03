import { getFormattedDate } from "@/lib/date-config";

export interface ITransaction {
  id: string;
  amount: number;
  date: string;
  type: TransactionType;
  userId: string;
}

export type TransactionType = "exchange" | "ted" | "loan";

export enum TransactionTypeLabels {
  loan = "Empréstimo e financiamento",
  exchange = "Câmbio de moeda",
  ted = "DOC/TED",
}

export class Transaction {
  #id: string;
  #amount: number;
  #date: string;
  #type: "exchange" | "ted" | "loan";
  #userId: string;

  constructor(transaction: ITransaction) {
    this.#id = transaction.id;
    this.#amount = transaction.amount;
    this.#date = transaction.date;
    this.#type = transaction.type;
    this.#userId = transaction.userId;
  }

  get id() {
    return this.#id;
  }

  get amount() {
    return this.#amount;
  }

  get date() {
    return this.#date;
  }

  get type() {
    return this.#type;
  }

  get labelType() {
    return this.#amount >= 0 ? "Depósito" : "Retirada";
  }

  get userId() {
    return this.#userId;
  }

  setAmount(value: number) {
    if (typeof value !== "number") throw new Error("Valor deve ser um número");
    this.#amount = value;
  }

  formattedAmount(): string {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(this.#amount);
  }

  formatDate(dateFormat: string): string {
    const date = getFormattedDate(this.#date, dateFormat);

    return date.charAt(0).toUpperCase() + date.slice(1);
  }
}
