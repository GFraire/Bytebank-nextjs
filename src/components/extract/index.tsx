import { Pencil, Trash } from "lucide-react";
import { ExtractContainer } from "./style";
import { ExtractItem } from "./extract-item";
import {} from "@/pages/account";
import { Transaction } from "@/models/Transaction";

interface IExtractProps {
  transactions: Transaction[];
  deleteTransaction: (transactionId: string) => void;
}

export function Extract({ transactions, deleteTransaction }: IExtractProps) {
  return (
    <ExtractContainer>
      <div className="header">
        <strong>Extrato</strong>

        <div>
          <div className="icon">
            <Pencil height={20} width={20} color="white" />
          </div>

          <div className="icon">
            <Trash height={20} width={20} color="white" />
          </div>
        </div>
      </div>

      <div className="extract-items">
        {transactions.map((transaction) => (
          <ExtractItem key={transaction.id} transaction={transaction} deleteTransaction={deleteTransaction} />
        ))}
      </div>
    </ExtractContainer>
  );
}
