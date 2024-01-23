'use client'

import { FC, HTMLAttributes } from 'react'
import TodoItemCheck from './TodoItemCheck'
import TodoItemBody from './TodoItemBody'
import { cn } from '@/lib/utils'
import { Cross1Icon } from '@radix-ui/react-icons'
import TodoItemDelete from './TodoItemDelete'

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
            grid grid-cols-[1fr_9fr_1fr] 
            border-b-2 bg-secondary border-border group`,
          className
        )}
    >
      <TodoItemCheck id={todo.id} completed={todo.completed} />
      <TodoItemBody {...todo} />
      <TodoItemDelete id={todo.id} />
    </div>
  )
}

export default TodoItem