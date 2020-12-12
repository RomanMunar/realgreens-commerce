import { IUser } from "./User"

export interface IRating {
  author: {
    user_id: IUser["_id"]
    name: IUser["name"]
    portrait: IUser["portrait"]
  }
  description: string
  rating_star: number
}
