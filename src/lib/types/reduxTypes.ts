export type Todo = {
  id: string
  text: string
  completed: boolean
  order: number
}

export enum Filter {
  Completed = 'Completed',
  Active = 'Active',
}

export interface TodoState {
  items: Todo[]
  filter: Set<Filter>
}