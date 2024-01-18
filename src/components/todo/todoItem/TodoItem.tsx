'use client'

import { FC, HTMLAttributes } from 'react'
import TodoItemCheck from './TodoItemCheck'
import TodoItemBody from './TodoItemBody'
import { cn } from '@/lib/utils'

interface TodoItemProps extends HTMLAttributes<HTMLDivElement> {
  todo: {
    id: string
    text: string
    completed?: boolean
  }
}

const TodoItem: FC<TodoItemProps> = ({ todo, className }) => {
  // Fluff: Enable textItemBody to be edited

  return (
    <div
      className={
        cn(
          `w-full h-full min-h-20 
            grid grid-cols-[1fr_9fr] 
            border-b-2 bg-secondary border-border`,
          className
        )}
    >
      <TodoItemCheck id={todo.id} completed={todo.completed} />
      <TodoItemBody {...todo} />
    </div>
  )
}

export default TodoItem