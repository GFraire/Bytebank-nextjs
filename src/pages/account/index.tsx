import { useEffect, useState } from "react";
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

  const colors = theme.colors;

  function onSetMenuItemActive(item: MenuTypes) {
    setMenuItemActive(item);
  }

  function onSetTransaction(transaction: TransactionModel) {
    const updatedTransactions = [...localTransactions, transaction];

    setLocalTransactions(updatedTransactions);
    onSetCurrentUser(updatedTransactions);
  }

  function onDeleteTransaction(transactionId: string) {
    const transactionsFiltered = localTransactions.filter(
      (transaction) => transaction.id !== transactionId
    );

    const updatedTransactions = transactionsFiltered;

    setLocalTransactions(updatedTransactions);
    onSetCurrentUser(updatedTransactions);
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
            {currentUser.name}

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

          <Extract transactions={localTransactions} deleteTransaction={onDeleteTransaction} />
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

    return {
      props: {
        user: userResponse.data,
        transactions: transactionsResponse.data,
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
