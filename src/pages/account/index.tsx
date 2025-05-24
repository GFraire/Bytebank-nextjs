import { useState } from "react";
import { CircleUser } from "lucide-react";
import { GetServerSideProps } from "next";
import Head from "next/head";

import { SideBar } from "@/components/sidebar";
import {
  AccountContainer,
  Content,
  HeaderContainer,
  HeaderContent,
  Main,
} from "@/styles/pages/account";
import { Balance } from "@/components/balance";
import { api } from "@/lib/axios";
import { theme } from "@/styles/stitches.config";

export type MenuTypes = "home" | "transfers" | "investments" | "services";

interface IAccountProps {
  user: IUser;
}

export interface IUser {
  id: string;
  name: string;
  balance: number;
}

export default function Account({ user }: IAccountProps) {
  const [menuItemActive, setMenuItemActive] = useState<MenuTypes>("home");
  const colors = theme.colors;

  function onSetMenuItemActive(item: MenuTypes) {
    setMenuItemActive(item);
  }

  return (
    <>
      <Head>
        <title>Bytebank | Serviços</title>
      </Head>

      <AccountContainer>
        <HeaderContainer>
          <HeaderContent>
            {user.name}

            <CircleUser height={40} width={40} color={colors.secondary.value} />
          </HeaderContent>
        </HeaderContainer>

        <Content>
          <SideBar
            menuItemActive={menuItemActive}
            onSetMenuItemActive={onSetMenuItemActive}
          />

          <Main>
            <Balance user={user} />

            <div style={{ height: "100%" }}>Teste</div>
          </Main>
        </Content>
      </AccountContainer>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<
  IAccountProps
> = async () => {
  let user = {} as IUser;

  try {
    const userId = 1;
    const response = await api.get<IUser>(`/users/${userId}`);
    user = response.data;
  } catch (err) {
    console.log("Falha ao buscar usuário");

    return {
      redirect: {
        destination: "/",
      },
      props: {
        user,
      },
    };
  }
  return {
    props: {
      user,
    },
  };
};
