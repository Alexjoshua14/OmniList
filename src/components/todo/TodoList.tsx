'use client'

import { FC } from 'react'
import TodoItem from './todoItem/TodoItem'
import TodoListFooter from './TodoListFooter'
import { useAppSelector } from '@/redux/hooks'
import { selectFilteredTodos, selectTodos } from '@/redux/slices/todoSlice'

interface TodoListProps {
}

const TodoList: FC<TodoListProps> = ({ }) => {
  const todos = useAppSelector(selectFilteredTodos)

  return (
    <div className="w-full px-4 bg-slate-800 rounded overflow-clip">
      <div className="flex flex-col items-center justify-center bg-slate-800">
        {todos.map((item, i) => (
          <TodoItem key={item.id} todo={item} />
        ))}
      </div>
      <TodoListFooter />
    </div>
  )
}

export default TodoList