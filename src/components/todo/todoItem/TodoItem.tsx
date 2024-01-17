import { FC } from 'react'
import TodoItemCheck from './TodoItemCheck'
import TodoItemBody from './TodoItemBody'

interface TodoItemProps {
  id?: number
}

const TodoItem: FC<TodoItemProps> = ({ }) => {
  // Fluff: Enable textItemBody to be edited

  return (
    <div
      className="w-full h-full min-h-20 grid grid-cols-[1fr_9fr] border-b-2 bg-slate-800 border-slate-100/20"
    >
      <TodoItemCheck />
      <TodoItemBody completed text={`Todo item body here`} />
    </div>
  )
}

export default TodoItem