import { useState } from "react";
import { Select } from "../ui/select";
import { TransactionContainer } from "./style";
import { NumberInput } from "../ui/number-input";
import { Button } from "../ui/button";
import { nextApi } from "@/lib/axios";
import { ITransactionParams } from "@/pages/api/transactions/createTransaction";
import {
  ITransaction,
  Transaction as TransactionModel,
  TransactionType,
} from "@/models/Transaction";
import { AxiosResponse } from "axios";
import { getCurrentDate } from "@/lib/date-config";
import { Utils } from "@/models/Utils";

interface ITransactionProps {
  userId: string;
  setTransactions: (transaction: TransactionModel) => void;
}

interface IOptions {
  value: TransactionType;
  description: string;
}

export function Transaction({ userId, setTransactions }: ITransactionProps) {
  const [transactionType, setTransactionType] =
    useState<TransactionType>("exchange");
  const [transactionValue, setTransactionValue] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const isButtonDisabled =
    isLoading || isZero(transactionValue) || transactionValue === "";

  function onSetTransactionType(type: TransactionType) {
    setTransactionType(type);
  }

  function onSetTransactionValue(value: string) {
    setTransactionValue(value);
  }

  function isZero(value: string): boolean {
    const normalized = value.replace(",", ".");
    const number = parseFloat(normalized);

    return !isNaN(number) && number === 0;
  }

  const options: IOptions[] = [
    { value: "exchange", description: "Câmbio de Moeda" },
    { value: "ted", description: "DOC/TED" },
    { value: "loan", description: "Empréstimo e Financiamento" },
  ];

  async function handleCreateTransaction() {
    setIsLoading(true);

    const payload: ITransactionParams = {
      amount: Utils.formatBrStringToNumber(transactionValue),
      date: getCurrentDate("yyyy-MM-dd'T'HH:mm:ss"),
      type: transactionType,
      userId,
    };

    try {
      const response = await nextApi.post<
        ITransaction,
        AxiosResponse<ITransaction>,
        ITransactionParams
      >("/api/transactions/createTransaction", payload);

      const transaction = new TransactionModel(response.data);

      setTransactions(transaction);
      setTransactionValue("");
    } catch (err) {
      console.error(err);
    }

    setIsLoading(false);
  }

  return (
    <TransactionContainer>
      <h4>Nova transação</h4>

      <Select<TransactionType>
        placeholder="Selecione o tipo de transação"
        options={options}
        setValue={onSetTransactionType}
      />

      <div className="value">
        <span>Valor</span>

        <NumberInput
          value={transactionValue}
          setValue={onSetTransactionValue}
        />
      </div>

      <Button
        disabled={isButtonDisabled}
        primary
        onClick={handleCreateTransaction}
      >
        Concluir transação
      </Button>
    </TransactionContainer>
  );
}
