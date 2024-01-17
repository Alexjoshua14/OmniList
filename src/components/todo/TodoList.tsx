import { FC } from 'react'
import TodoItem from './todoItem/TodoItem'
import TodoListFooter from './TodoListFooter'

interface TodoListProps {
}

const TodoList: FC<TodoListProps> = ({ }) => {
  return (
    <div className="w-full px-4 bg-slate-800 rounded overflow-clip">
      <div className="flex flex-col items-center justify-center bg-slate-800">
        {Array.from({ length: 6 }).map((_, i) => (
          <TodoItem key={`todo-${i}`} />
        ))}
      </div>
      <TodoListFooter />
    </div>
  )
}

export default TodoList