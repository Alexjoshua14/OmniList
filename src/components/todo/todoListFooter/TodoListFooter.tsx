import { FC } from 'react'
import TodoFilters from './TodoFilters'
import TodoCount from './TodoCount'
import ClearCompleted from './ClearCompleted'

interface TodoListFooterProps {
}

const TodoListFooter: FC<TodoListFooterProps> = ({ }) => {
  // TODO: Grab the number of items left from redux store

  // TODO: Create wrapper functions to update redux filter state

  // TODO: Create wrapper function to clear completed todos

  return (
    <>
      <div className="hidden sm:flex h-16 w-full px-0 justify-between items-center text-sm text-secondary bg-secondary">
        {/* Items left */}
        <TodoCount />

        {/* Filters */}

        <TodoFilters />


        {/* Clear completed todos */}
        <ClearCompleted />
      </div>
      <div className="flex sm:hidden h-28 w-full flex-col gap-4 justify-between items-center text-sm text-secondary">
        <div className="flex-1 w-full flex justify-between items-center bg-secondary px-4 text-xs rounded-b shadow-xl">
          {/* Items left */}
          <TodoCount />

          {/* Clear completed todos */}
          <ClearCompleted />
        </div>
        <div className="flex-1 w-full px-4 flex items-center justify-center rounded bg-secondary shadow-xl">

          {/* Filters */}

          <TodoFilters />

        </div>
      </div>
    </>
  )
}

export default TodoListFooter