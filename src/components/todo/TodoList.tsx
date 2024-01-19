'use client'

import { FC, Fragment, useEffect, useState } from 'react'
import TodoItem from './todoItem/TodoItem'
import TodoListFooter from './todoListFooter/TodoListFooter'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { reorder, selectFilteredTodos, selectTodos } from '@/redux/slices/todoSlice'
import { AnimatePresence, motion } from 'framer-motion'
import Draggable from '../draggable/Draggable'

interface TodoListProps {
}

// TODO: Wrap items in AnimatePresence and animate on enter/exit
const TodoList: FC<TodoListProps> = ({ }) => {
  const orderedTodos = useAppSelector(state => selectFilteredTodos(state, true))
  const dispatch = useAppDispatch()

  return (
    <motion.div
      className="w-full px-4 bg-secondary rounded overflow-clip"
      transition={{ duration: 2 }}
    >
      <motion.div
        className="flex flex-col items-center justify-center bg-secondary"
        transition={{ duration: 2 }}
      >
        <AnimatePresence>
          <Draggable
            onReorder={(from, to) => dispatch(reorder({ oldIndex: from, newIndex: to }))}
          >
            {orderedTodos.map((item) => (
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
          </Draggable>
        </AnimatePresence>
      </motion.div>
      <TodoListFooter />
    </motion.div>
  )
}

export default TodoList