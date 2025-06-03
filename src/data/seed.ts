const fs = require("fs");
const path = require("path");

// Dados para popular o JSON Server
const data = {
  users: [
    {
      id: 1,
      name: "Gabriel Freire de Araújo",
      balance: 700
    },
    {
      id: 2,
      name: "Lana Carrero",
      balance: 1800
    }
  ],
  transactions: [
    {
      id: 1,
      userId: 1,
      type: "exchange",
      amount: 500,
      date: "2025-05-15T10:00:00"
    },
    {
      id: 2,
      userId: 1,
      type: "ted",
      amount: 200,
      date: "2025-05-16T12:30:00"
    },
    {
      id: 3,
      userId: 2,
      type: "loan",
      amount: 2100,
      date: "2025-05-14T08:15:00"
    },
    {
      id: 4,
      userId: 2,
      type: "ted",
      amount: -300,
      date: "2025-05-15T14:45:00"
    }
  ]
};

// Caminho para o arquivo db.json
const dbPath = path.resolve(__dirname, "../db.json");

// Salva os dados no arquivo db.json
fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));

console.log("✅ Banco de dados populado com sucesso!");
