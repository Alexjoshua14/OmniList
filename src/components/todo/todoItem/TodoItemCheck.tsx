'use client'

import { FC } from 'react'
import { toggleTodo } from '@/redux/slices/todoSlice'
import { useAppDispatch } from '@/redux/hooks'
interface TodoItemCheckProps {
  id: string
}

const TodoItemCheck: FC<TodoItemCheckProps> = ({ id }) => {
  const dispatch = useAppDispatch()
  const toggleTodoItem = () => {
    dispatch(toggleTodo(id))
  }


  return (
    <div className="relative w-full h-full p-2 grid place-items-center">
      <button
        className="w-full max-w-7 aspect-square rounded-full border-2 border-slate-100/20"
        onClick={toggleTodoItem}
      />
    </div>
  )
}

export default TodoItemCheck