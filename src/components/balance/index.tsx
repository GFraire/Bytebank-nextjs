import { BalanceContainer, BalanceValue } from "./style";
import { getCurrentDate } from "@/lib/date-config";
import { Eye, EyeClosed } from "lucide-react";
import { theme } from "@/styles/stitches.config";
import { useState } from "react";
import { User } from "@/models/User";

interface IBalanceProps {
  user: User;
}

export function Balance({ user }: IBalanceProps) {
  const [showBalance, setShowBalance] = useState(true);

  const balance = showBalance ? user.currencyBRLValue : "*****";
  const date = getCurrentDate("EEEE, dd/MM/yyyy");
  const dateCapitalize = date.charAt(0).toUpperCase() + date.slice(1);
  const colors = theme.colors;

  function handleToggleShowBalance() {
    setShowBalance(!showBalance);
  }

  return (
    <BalanceContainer>
      <div className="hello">
        <h4>Olá, {user.firstName}! :)</h4>

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
