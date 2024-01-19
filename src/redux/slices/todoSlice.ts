import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import { createId } from '@paralleldrive/cuid2'
import { Todo, Filter, TodoState } from '@/lib/types/reduxTypes'

const initialState = {
  items: [
    {
      id: createId(),
      text: "Tune in to Theo's live stream",
      completed: true,
      order: 1,
    },
    {
      id: createId(),
      text: '10 minutes mediation',
      completed: false,
      order: 0,
    },
    {
      id: createId(),
      text: 'Complete Todo App',
      completed: false,
      order: 2,
    },
    {
      id: createId(),
      text: 'Touch grass',
      completed: false,
      order: 3,
    }
  ],
  filters: new Set<Filter>(),
}

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      const newTodo = {
        id: createId(),
        text: action.payload,
        completed: false,
        order: state.items.length,
      }
      state.items.push(newTodo)
    },
    toggleTodo: (state, action: PayloadAction<string>) => {
      const todo = state.items.find((todo) => todo.id === action.payload)
      if (todo) {
        todo.completed = !todo.completed
      }
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      const index = state.items.findIndex((todo) => todo.id === action.payload)
      if (index !== -1) {
        state.items.splice(index, 1)
      }
    },
    activeFilter: (state, action: PayloadAction<boolean>) => {
      if (action.payload)
        state.filters.add(Filter.Active)
      else
        state.filters.delete(Filter.Active)
    },
    completedFilter: (state, action: PayloadAction<boolean>) => {
      if (action.payload)
        state.filters.add(Filter.Completed)
      else
        state.filters.delete(Filter.Completed)
    },
    toggleFilter: (state, action: PayloadAction<Filter>) => {
      if (state.filters.has(action.payload))
        state.filters.delete(action.payload)
      else
        state.filters.add(action.payload)
    },
    clearFilters: (state) => {
      state.filters.clear()
    },
    clearCompleted: (state) => {
      state.items = state.items.filter((todo) => !todo.completed)
    },
    reorder: (state, action: PayloadAction<{ oldIndex: number; newIndex: number }>) => {
      const { oldIndex, newIndex } = action.payload
      const [removed] = state.items.splice(oldIndex, 1)
      state.items.splice(newIndex, 0, removed)
      //TODO update order to enable persistence
    }
  },
})

export const { addTodo, toggleTodo, removeTodo, activeFilter, clearCompleted, clearFilters, completedFilter, toggleFilter, reorder } = todoSlice.actions

export const selectTodos = (state: RootState) => state.todo.items

export const selectFilteredTodos = (state: RootState, ordered: boolean) => {
  
  const { items, filters } = state.todo
  let filteredItems = items

  if (filters.size === 0) {
    return items
  }

  filters.forEach((filter) => {
    switch (filter) {
      case Filter.Completed:
        filteredItems = filteredItems.filter((todo) => todo.completed)
        break
      case Filter.Active:
        filteredItems = filteredItems.filter((todo) => !todo.completed)
        break
    }
  })

  if (ordered)
    filteredItems.sort((a, b) => a.order - b.order)

  return filteredItems
}

export const selectOrderedTodos = (state: RootState) => state.todo.items.sort((a, b) => a.order - b.order)

export const selectActiveFilter = (state: RootState) => state.todo.filters.has(Filter.Active)
export const selectCompletedFilter = (state: RootState) => state.todo.filters.has(Filter.Completed)
export const selectFilter = (state: RootState) => state.todo.filters
export const selectTodoStatus = (state: RootState, id: string) => state.todo.items.find((todo) => todo.id === id)?.completed


export const selectCount = (state: RootState) => state.todo.items.length

export default todoSlice.reducer