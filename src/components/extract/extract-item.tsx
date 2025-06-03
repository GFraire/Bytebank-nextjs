import { MinusCircle } from "lucide-react";
import { ChangeEvent, useEffect, useState } from "react";

import { Transaction } from "@/models/Transaction";
import { Utils } from "@/models/Utils";
import { theme } from "@/styles/stitches.config";
import { nextApi } from "@/lib/axios";
import { Button } from "../ui/button";
import { NumberInput } from "../ui/number-input";
import { ExtractItemContainer } from "./style";
import { ITransactionParams } from "@/pages/api/transactions/createTransaction";
import { getCurrentDate, getFormattedDate } from "@/lib/date-config";

interface IExtractItemProps {
  transaction: Transaction;
  showDeleteItem: boolean;
  showEditItem: boolean;
  deleteTransaction: (transactionId: string) => void;
  updateTransaction: (
    transaction: ITransactionParams,
    transactionId: string
  ) => void;
}

export function ExtractItem({
  transaction,
  showDeleteItem,
  showEditItem,
  deleteTransaction,
  updateTransaction,
}: IExtractItemProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [transactionValue, setTransactionValue] = useState("");
  const [transactionDate, setTransactionDate] = useState(
    transaction.formatDate("yyyy-MM-dd")
  );

  useEffect(() => {
    if (showEditItem) {
      const transactionAmountFormatted = Utils.formatNumberToBrString(
        transaction.amount
      );

      const transactionDate = transaction.formatDate("yyyy-MM-dd");

      setTransactionValue(transactionAmountFormatted);
      setTransactionDate(transactionDate);
    }
  }, [showEditItem]);

  useEffect(() => {
    if (transactionValue !== "" && transactionDate !== "")
      onUpdateTransactionValue();
  }, [transactionDate]);

  const month = transaction.formatDate("MMMM");
  const dateFormatted = transaction.formatDate("dd/MM/yyyy");
  const type = transaction.labelType;
  const valueFormatted = transaction.formattedAmount();
  const colors = theme.colors;

  function onSetTransactionValue(value: string) {
    setTransactionValue(value);
  }

  async function handleDeleteTransaction() {
    setIsLoading(true);

    const response = await nextApi.delete(
      `/api/transactions/${transaction.id}`
    );

    if (response.status === 204) {
      deleteTransaction(transaction.id);
    }

    setIsLoading(false);
  }

  async function onUpdateTransactionValue() {
    const transactionAmountFormatted = Utils.formatNumberToBrString(
      transaction.amount
    );

    const transactionDateFormatted = transaction.formatDate("yyyy-MM-dd");

    if (
      transactionValue !== transactionAmountFormatted ||
      transactionDate !== transactionDateFormatted
    ) {
      setIsLoading(true);

      const transactionValueConvertedToNumber =
        Utils.formatBrStringToNumber(transactionValue);

      const date = getFormattedDate(transactionDate, "yyyy-MM-dd'T'HH:mm:ss");

      const payload: ITransactionParams = {
        amount: transactionValueConvertedToNumber,
        date,
        type: transaction.type,
        userId: transaction.userId,
      };

      const response = await nextApi.put(
        `/api/transactions/${transaction.id}`,
        payload
      );

      if (response.status === 200) {
        updateTransaction(payload, transaction.id);
      }

      setIsLoading(false);
    }
  }

  function handleSetTransactionDate(event: ChangeEvent<HTMLInputElement>) {
    setTransactionDate(event.target.value);
  }

  return (
    <ExtractItemContainer>
      <span>{month}</span>

      <div>
        <span>{type}</span>

        {showEditItem ? (
          <input
            className="input-date"
            max={getCurrentDate("yyyy-MM-dd")}
            type="date"
            value={transactionDate}
            onChange={handleSetTransactionDate}
          />
        ) : (
          <span className="date">{dateFormatted}</span>
        )}
      </div>

      <div>
        {showEditItem ? (
          <NumberInput
            plain
            value={transactionValue}
            setValue={onSetTransactionValue}
            onBlur={onUpdateTransactionValue}
          />
        ) : (
          <strong>{valueFormatted}</strong>
        )}

        {showDeleteItem && (
          <Button icon disabled={isLoading}>
            <MinusCircle
              className="icon"
              color={colors.error.value}
              height={20}
              width={20}
              onClick={handleDeleteTransaction}
            />
          </Button>
        )}
      </div>

      <div className="divider" />
    </ExtractItemContainer>
  );
}
