import { ICatergory } from "./Category"
import { IRating } from "./Rating"

export interface IProduct {
  _id: number
  name: string
  description: string
  price: number
  image: string
  images: string[]
  weight?: number
  dimension: [number, number] // ex. 50cm x 60cm
  category: ICatergory
  discount: number
  stock: number
  sold: number
  like_count: number
  rating?: IRating[]
  variations?: Array<{
    variant: string
    values: Array<string | number>
  }>
}
