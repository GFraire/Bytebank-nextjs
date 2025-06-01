import { api } from "@/lib/axios";
import { isAxiosError } from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "DELETE") {
    try {
      const { id } = req.query as { id: string };
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
  }
}
