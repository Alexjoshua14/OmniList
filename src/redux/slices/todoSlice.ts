import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import { createId } from '@paralleldrive/cuid2'

export interface TodoState {
  id: string
  text: string
  completed: boolean
}

const initialState: TodoState[] = [
  {
    id: createId(),
    text: '10 minutes mediation',
    completed: false,
  },
  {
    id: createId(),
    text: 'Complete Todo App',
    completed: false,
  },
  {
    id: createId(),
    text: 'Touch grass',
    completed: false,
  }
]

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      const newTodo = {
        id: createId(),
        text: action.payload,
        completed: false,
      }
      state.push(newTodo)
    },
    toggleTodo: (state, action: PayloadAction<string>) => {
      const todo = state.find((todo) => todo.id === action.payload)
      if (todo) {
        todo.completed = !todo.completed
      }
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      const index = state.findIndex((todo) => todo.id === action.payload)
      if (index !== -1) {
        state.splice(index, 1)
      }
    },
  },
})

export const { addTodo, toggleTodo, removeTodo } = todoSlice.actions

export const selectTodos = (state: RootState) => state.todos

export default todoSlice.reducer