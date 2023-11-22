export interface User {
  id: number
  name: string
  imgUrl: string
}

export interface UserState {
  userData: User | null
}
