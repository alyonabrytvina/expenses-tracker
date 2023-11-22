export interface Card {
  amount: number
  id: number
  cardNumber: string
  cardType: string
}

export interface CardState {
  list: Card[]
  selectedCard: Card | null
}
