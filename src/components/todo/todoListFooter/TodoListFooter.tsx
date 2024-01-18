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
    <div className="h-16 w-full flex justify-between items-center text-sm text-secondary">
      {/* Items left */}
      <TodoCount />

      {/* Filters */}
      <TodoFilters />

      {/* Clear completed todos */}
      <ClearCompleted />
    </div>
  )
}

export default TodoListFooter