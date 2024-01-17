import { FC } from 'react'
import TodoItemCheck from './todoItem/TodoItemCheck'
import { Input } from '../ui/input'

interface NewTodoProps {

}

const NewTodo: FC<NewTodoProps> = ({ }) => {
  return (
    <div
      className="w-full h-full min-h-20 grid grid-cols-[1fr_9fr] bg-slate-800 shadow-lg"
    >
      <TodoItemCheck />
      <div className="w-full h-full flex items-center">
        <Input
          className="border-0 focus-visible:ring-0"
          placeholder='Create a new todo...'

        />
      </div>
    </div>
  )
}

export default NewTodo