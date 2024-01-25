export interface DailyPizzaOptionsItems {
  id: string
  name: string
  img: string
  ingredients: string
  recommendationDay: boolean
  points: number
}

export type DailyPizzaOptionsList = DailyPizzaOptionsItems[] | null

export interface DailyPizzaOptionsFindAllType {
  data: DailyPizzaOptionsList
  error: string
}
