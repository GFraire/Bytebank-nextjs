import { api } from "@/lib/axios";
import { isAxiosError } from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export interface IUserParams {
  name: string;
  balance: number;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "PUT") {
    res.setHeader("Allow", ["PUT"]);
    res.status(405).send({ message: "Method Not Allowed" });
  }

  const { id } = req.query as { id: string };

  const body = req.body as IUserParams;

  if (!validadeBodyParams(body))
    return res.status(400).json({ message: "Invalid request body" });

  try {
    const result = await api.put(`/users/${id}`, body);

    return res.status(200).json(result.data);
  } catch (err) {
    if (isAxiosError(err)) {
      const status = err.response?.status || 500;
      const message = err.response?.data?.message || "Erro ao atualizar usuário";

      return res.status(status).send({ message });
    }

    console.error("Unexpected error:", err);
    return res.status(500).send({ message: "Erro interno do servidor" });
  }
}

function validadeBodyParams(body: IUserParams) {
  const { name, balance } = body;

  return typeof balance === "number" && typeof name === "string";
}
