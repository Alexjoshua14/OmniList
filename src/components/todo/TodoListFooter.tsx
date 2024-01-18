'use client'

import { FC } from 'react'
import TodoFilters from './todoFooter/TodoFilters'
import TodoCount from './todoFooter/TodoCount'

interface TodoListFooterProps {
}

const TodoListFooter: FC<TodoListFooterProps> = ({ }) => {
  // TODO: Grab the number of items left from redux store

  // TODO: Create wrapper functions to update redux filter state

  // TODO: Create wrapper function to clear completed todos

  return (
    <div className="h-16 w-full flex justify-between items-center text-sm">
      {/* Items left */}
      <TodoCount />

      {/* Filters */}
      <TodoFilters />

      {/* Clear completed todos */}
      <div>
        <button onClick={() => console.log(`Clear completed clicked`)}>
          <p>
            {`Clear Completed`}
          </p>
        </button>
      </div>
    </div>
  )
}

export default TodoListFooter