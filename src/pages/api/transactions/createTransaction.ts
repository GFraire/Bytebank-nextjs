import { api } from "@/lib/axios";
import { TransactionType } from "@/models/Transaction";
import { isAxiosError } from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export interface ITransactionParams {
  amount: number;
  date: string;
  type: TransactionType;
  userId: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    res.status(405).send({ message: "Method Not Allowed" });
  }

  const body = req.body as ITransactionParams;

  if (!validadeBodyParams(body))
    return res.status(400).json({ message: "Invalid request body" });

  try {
    const result = await api.post("/transactions", body);

    return res.status(201).json(result.data);
  } catch (err) {
    if (isAxiosError(err)) {
      const status = err.response?.status || 500;
      const message = err.response?.data?.message || "Erro ao criar transação";

      return res.status(status).send({ message });
    }

    console.error("Unexpected error:", err);
    return res.status(500).send({ message: "Erro interno do servidor" });
  }
}

export function validadeBodyParams(body: ITransactionParams) {
  const { amount, date, type, userId } = body;

  return (
    typeof amount === "number" &&
    typeof date === "string" &&
    ["exchange", "ted", "loan"].includes(type) &&
    typeof userId === "string"
  );
}
