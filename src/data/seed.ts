const fs = require("fs");
const path = require("path");

// Dados para popular o JSON Server
const data = {
  users: [
    {
      id: 1,
      name: "Alice",
      balance: 1500
    },
    {
      id: 2,
      name: "Bob",
      balance: 3000
    }
  ],
  transactions: [
    {
      id: 1,
      userId: 1,
      type: "deposit",
      amount: 500,
      date: "2025-05-15T10:00:00Z"
    },
    {
      id: 2,
      userId: 1,
      type: "transfer",
      amount: 200,
      date: "2025-05-16T12:30:00Z"
    },
    {
      id: 3,
      userId: 2,
      type: "deposit",
      amount: 1000,
      date: "2025-05-14T08:15:00Z"
    },
    {
      id: 4,
      userId: 2,
      type: "transfer",
      amount: 300,
      date: "2025-05-15T14:45:00Z"
    }
  ]
};

// Caminho para o arquivo db.json
const dbPath = path.resolve(__dirname, "../db.json");

// Salva os dados no arquivo db.json
fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));

console.log("✅ Banco de dados populado com sucesso!");
