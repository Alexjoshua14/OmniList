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
  //Note there is a non-serializable concern but for this simple app it's okay
  filter: Set<Filter> 
}