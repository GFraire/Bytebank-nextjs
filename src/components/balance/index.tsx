import { BalanceContainer, BalanceValue } from "./style";
import { getCurrentDate } from "@/lib/date-config";
import { IUser } from "@/pages/account";
import { Eye, EyeClosed } from "lucide-react";
import { theme } from "@/styles/stitches.config";
import { useState } from "react";

interface IBalanceProps {
  user: IUser;
}

export function Balance({ user }: IBalanceProps) {
  const [showBalance, setShowBalance] = useState(true);

  const formattedValue = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(user.balance);

  const balance = showBalance ? formattedValue : '*****'

  const date = getCurrentDate("EEEE, dd/MM/yyyy");
  const dateCapitalize = date.charAt(0).toUpperCase() + date.slice(1);
  const firstName = user.name.split(" ")[0];
  const colors = theme.colors;

  function handleToggleShowBalance() {
    setShowBalance(!showBalance);
  }

  return (
    <BalanceContainer>
      <div className="hello">
        <h4>Olá, {firstName}! :)</h4>

        <span>{dateCapitalize}</span>
      </div>

      <BalanceValue>
        <div className="action">
          <span>Saldo</span>

          {showBalance ? (
            <Eye
              cursor="pointer"
              color={colors.secondary.value}
              height={20}
              width={20}
              onClick={handleToggleShowBalance}
            />
          ) : (
            <EyeClosed
              cursor="pointer"
              color={colors.secondary.value}
              height={20}
              width={20}
              onClick={handleToggleShowBalance}
            />
          )}
        </div>

        <div className="value">
          <span>Conta Corrente</span>

          <h3>{balance}</h3>
        </div>
      </BalanceValue>
    </BalanceContainer>
  );
}
