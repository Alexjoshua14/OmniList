'use client'

import { FC } from 'react'
import TodoCount from './todoFooter/todoCount'

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
      <div className="flex items-center gap-4">
        <button onClick={() => console.log(`All filter clicked`)}>
          <p>
            {`All`}
          </p>
        </button>
        <button onClick={() => console.log(`Active filter clicked`)}>
          <p>
            {`Active`}
          </p>
        </button>
        <button onClick={() => console.log(`Completed filter clicked`)}>
          <p>
            {`Completed`}
          </p>
        </button>
      </div>

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