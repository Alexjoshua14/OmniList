'use client'

import React, { FC } from 'react'
import { toggleTodo } from '@/redux/slices/todoSlice'
import { useAppDispatch } from '@/redux/hooks'
import { CheckIcon } from '@radix-ui/react-icons'
import { GradientCircle } from '@/components/misc/GradientCircle'
interface TodoItemCheckProps {
  id: string
  completed?: boolean
}

const TodoItemCheck: FC<TodoItemCheckProps> = ({ id, completed }) => {
  const dispatch = useAppDispatch()
  const toggleTodoItem = () => {
    dispatch(toggleTodo(id))
  }

  return (
    <div className="relative w-full h-full p-2 grid place-items-center">
      <GradientCircle active={completed}>
        <button onClick={toggleTodoItem} className="w-full h-full grid place-content-center">
          {completed && <CheckIcon className="-translate-x-[6%] scale-125" />}
        </button>
      </GradientCircle>
    </div>
  )
}

export default TodoItemCheck