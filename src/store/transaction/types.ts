export interface Transaction {
  id: string
  storeName: string
  type: string
  amount: number
  date: string
}

export interface TransactionState {
  list: Transaction[]
}
