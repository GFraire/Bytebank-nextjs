export interface IUser {
  id: string;
  name: string;
  balance: number;
}

export class User {
  #id: string;
  #name: string;
  #balance: number;

  constructor(user: IUser) {
    this.#id = user.id;
    this.#name = user.name;
    this.#balance = user.balance;
  }

  get id() {
    return this.#id;
  }

  get name() {
    return this.#name;
  }

  get firstName() {
    return this.#name.split(" ")[0];
  }

  get currencyBRLValue() {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(this.#balance);
  }
}
