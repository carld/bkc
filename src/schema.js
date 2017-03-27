export const typeDefs = `

type Account {
  id: Int!
  name: String
  iban: String
  transactions: [Transaction]
}

type Transaction {
  id: Int!
  particulars: String
  code: String
  reference: String
  amount: Int
  created_at: String
}

type Query {
  account(id: Int!): Account
}
`;
