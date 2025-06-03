import { useEffect, useRef, useState } from "react";
import { CircleUser } from "lucide-react";
import { GetServerSideProps } from "next";
import Head from "next/head";
import axios from "axios";

import { SideBar } from "@/components/sidebar";
import {
  AccountContainer,
  Content,
  HeaderContainer,
  HeaderContent,
  Main,
} from "@/styles/pages/account";
import { Balance } from "@/components/balance";
import { api, nextApi } from "@/lib/axios";
import { theme } from "@/styles/stitches.config";
import { Transaction } from "@/components/transaction";
import { Extract } from "@/components/extract";
import {
  ITransaction,
  Transaction as TransactionModel,
} from "@/models/Transaction";
import { IUser, User } from "@/models/User";
import { ITransactionParams } from "../api/transactions/createTransaction";
import { HamburgerMenu } from "@/components/hamburguer-menu";

export type MenuTypes = "home" | "transfers" | "investments" | "services";

interface IAccountProps {
  user: IUser;
  transactions: ITransaction[];
}

export default function Account({ user, transactions }: IAccountProps) {
  const [menuItemActive, setMenuItemActive] = useState<MenuTypes>("home");
  const [currentUser, setCurrentUser] = useState<User>(() => new User(user));
  const [localTransactions, setLocalTransactions] = useState<
    TransactionModel[]
  >(() => transactions.map((t) => new TransactionModel(t)));
  const hasMounted = useRef(false);

  const colors = theme.colors;

  useEffect(() => {
    if (hasMounted.current) {
      onSetCurrentUser(localTransactions);
    } else {
      hasMounted.current = true;
    }
  }, [localTransactions]);

  function onSetMenuItemActive(item: MenuTypes, isDisabled: boolean) {
    if (!isDisabled) setMenuItemActive(item);
  }

  function onSetTransaction(transaction: TransactionModel) {
    setLocalTransactions([...localTransactions, transaction]);
  }

  function onDeleteTransaction(transactionId: string) {
    const transactionsFiltered = localTransactions.filter(
      (transaction) => transaction.id !== transactionId
    );

    const updatedTransactions = transactionsFiltered;

    setLocalTransactions(updatedTransactions);
  }

  function onUpdateTransaction(
    updatedTransaction: ITransactionParams,
    transactionId: string
  ) {
    setLocalTransactions((prevTransactions) => {
      const newTransactions = prevTransactions
        .map((transaction) => {
          if (transaction.id === transactionId) {
            return new TransactionModel({
              id: transaction.id,
              date: updatedTransaction.date,
              type: updatedTransaction.type,
              userId: updatedTransaction.userId,
              amount: updatedTransaction.amount,
            });
          }
          return transaction;
        })
        .sort((a, b) => {
          return new Date(a.date).getTime() - new Date(b.date).getTime();
        });

      return newTransactions;
    });
  }

  async function onSetCurrentUser(
    updatedTransactions: TransactionModel[] = localTransactions
  ) {
    const balance = updatedTransactions.reduce((acc, transaction) => {
      return acc + transaction.amount;
    }, 0);

    const response = await nextApi.put(
      `/api/users/updateUser/${currentUser.id}`,
      {
        name: currentUser.name,
        balance,
      }
    );

    if (response.status === 200) {
      setCurrentUser(new User(response.data));
    }
  }

  return (
    <>
      <Head>
        <title>Bytebank | Serviços</title>
      </Head>

      <AccountContainer>
        <HeaderContainer>
          <HeaderContent>
            <HamburgerMenu />

            <span>{currentUser.name}</span>

            <CircleUser height={40} width={40} color={colors.secondary.value} />
          </HeaderContent>
        </HeaderContainer>

        <Content>
          <SideBar
            menuItemActive={menuItemActive}
            onSetMenuItemActive={onSetMenuItemActive}
          />

          <Main>
            <Balance user={currentUser} />

            <Transaction
              userId={currentUser.id}
              setTransactions={onSetTransaction}
            />
          </Main>

          <Extract
            transactions={localTransactions}
            deleteTransaction={onDeleteTransaction}
            updateTransaction={onUpdateTransaction}
          />
        </Content>
      </AccountContainer>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<
  IAccountProps
> = async () => {
  try {
    const userId = 1;

    const [userResponse, transactionsResponse] = await Promise.all([
      api.get<IUser>(`/users/${userId}`),
      api.get<ITransaction[]>(`/transactions`, {
        params: { userId },
      }),
    ]);

    const sortedTransactions = transactionsResponse.data.sort((a, b) => {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    });

    return {
      props: {
        user: userResponse.data,
        transactions: sortedTransactions,
      },
    };
  } catch (err) {
    if (axios.isAxiosError(err)) {
      console.error("Erro da API:", err.response?.data);
    } else {
      console.error("Erro desconhecido:", err);
    }

    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
};
