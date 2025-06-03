import { Pencil, Trash } from "lucide-react";
import { ExtractContainer } from "./style";
import { ExtractItem } from "./extract-item";
import { Transaction } from "@/models/Transaction";
import { useState } from "react";
import { Button } from "../ui/button";
import { ITransactionParams } from "@/pages/api/transactions/createTransaction";

interface IExtractProps {
  transactions: Transaction[];
  deleteTransaction: (transactionId: string) => void;
  updateTransaction: (transaction: ITransactionParams, transactionId: string) => void;
}

export function Extract({
  transactions,
  deleteTransaction,
  updateTransaction,
}: IExtractProps) {
  const [showDeleteItem, setShowDeleteItem] = useState(false);
  const [showEditItem, setShowEditItem] = useState(false);

  const isDeleteModeActiveClass = showDeleteItem ? "active icon" : "icon";
  const isEditModeActiveClass = showEditItem ? "active icon" : "icon";

  return (
    <ExtractContainer>
      <div className="header">
        <strong>Extrato</strong>

        <div>
          <Button
            icon
            className={isEditModeActiveClass}
            onClick={() => setShowEditItem(!showEditItem)}
          >
            <Pencil height={20} width={20} color="white" />
          </Button>

          <Button
            icon
            className={isDeleteModeActiveClass}
            onClick={() => setShowDeleteItem(!showDeleteItem)}
          >
            <Trash height={20} width={20} color="white" />
          </Button>
        </div>
      </div>

      <div className="extract-items">
        {transactions.map((transaction) => (
          <ExtractItem
            key={transaction.id}
            transaction={transaction}
            deleteTransaction={deleteTransaction}
            updateTransaction={updateTransaction}
            showDeleteItem={showDeleteItem}
            showEditItem={showEditItem}
          />
        ))}
      </div>
    </ExtractContainer>
  );
}
