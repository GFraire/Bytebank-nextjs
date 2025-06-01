import { Transaction } from "@/models/Transaction";
import { ExtractItemContainer } from "./style";
import { MinusCircle } from "lucide-react";
import { theme } from "@/styles/stitches.config";
import { nextApi } from "@/lib/axios";
import { Button } from "../ui/button";

interface IExtractItemProps {
  transaction: Transaction;
  deleteTransaction: (transactionId: string) => void;
}

export function ExtractItem({
  transaction,
  deleteTransaction,
}: IExtractItemProps) {
  const month = transaction.formatDate("MMMM");
  const dateFormatted = transaction.formatDate("dd/MM/yyyy");
  const type = transaction.type;
  const valueFormatted = transaction.formattedAmount();
  const colors = theme.colors;

  async function handleDeleteTransaction() {
    const response = await nextApi.delete(
      `/api/transactions/${transaction.id}`
    );

    if (response.status === 204) {
      deleteTransaction(transaction.id);
    }
  }

  return (
    <ExtractItemContainer>
      <span>{month}</span>

      <div>
        <span>{type}</span>

        <span className="date">{dateFormatted}</span>
      </div>

      <div>
        <strong>{valueFormatted}</strong>

        <Button icon>
          <MinusCircle
            className="icon"
            color={colors.error.value}
            height={20}
            width={20}
            onClick={handleDeleteTransaction}
          />
        </Button>
      </div>

      <div className="divider" />
    </ExtractItemContainer>
  );
}
