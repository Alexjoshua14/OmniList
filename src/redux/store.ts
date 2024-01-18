import { configureStore } from "@reduxjs/toolkit"
import todosReducer from "./slices/todoSlice"
import { enableMapSet } from "immer"

enableMapSet()

const store = configureStore({
  reducer: {
    todo: todosReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store