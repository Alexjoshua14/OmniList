'use client'

import { FC } from 'react'
import TodoItem from './todoItem/TodoItem'
import TodoListFooter from './todoListFooter/TodoListFooter'
import { useAppSelector } from '@/redux/hooks'
import { selectFilteredTodos, selectTodos } from '@/redux/slices/todoSlice'
import { AnimatePresence, motion } from 'framer-motion'

interface TodoListProps {
}

// TODO: Wrap items in AnimatePresence and animate on enter/exit
const TodoList: FC<TodoListProps> = ({ }) => {
  const todos = useAppSelector(selectFilteredTodos)

  return (
    <motion.div
      className="w-full px-4 bg-slate-800 rounded overflow-clip"
      transition={{ duration: 2 }}
    >
      <motion.div
        className="flex flex-col items-center justify-center bg-slate-800"
        transition={{ duration: 2 }}
      >
        <AnimatePresence>
          {todos.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.4 }}
              className="w-full"
            >
              <TodoItem todo={item} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
      <TodoListFooter />
    </motion.div>
  )
}

export default TodoList