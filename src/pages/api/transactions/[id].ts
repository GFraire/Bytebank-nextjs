import { api } from "@/lib/axios";
import { isAxiosError } from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { ITransactionParams, validadeBodyParams } from "./createTransaction";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query as { id: string };

  if (req.method === "DELETE") {
    try {
      await api.delete(`/transactions/${id}`);

      return res
        .status(204)
        .send({ message: "Transação deletada com sucesso" });
    } catch (err) {
      if (isAxiosError(err)) {
        const status = err.response?.status || 500;
        const message =
          err.response?.data?.message || "Erro ao deletar transação";

        return res.status(status).send({ message });
      }

      console.error("Unexpected error:", err);
      return res.status(500).send({ message: "Erro interno do servidor" });
    }
  } else if (req.method === "PUT") {
    const body = req.body as ITransactionParams;

    if (!validadeBodyParams(body))
      return res.status(400).json({ message: "Invalid request body" });

    try {
      const response = await api.put(`/transactions/${id}`, body);

      return res.status(200).json(response.data);
    } catch (err) {
      if (isAxiosError(err)) {
        const status = err.response?.status || 500;
        const message =
          err.response?.data?.message || "Erro ao atualizar transação";

        return res.status(status).send({ message });
      }

      console.error("Unexpected error:", err);
      return res.status(500).send({ message: "Erro interno do servidor" });
    }
  }
}
