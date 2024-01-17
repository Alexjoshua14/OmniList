import { FC } from 'react'

interface TodoItemCheckProps {

}

const TodoItemCheck: FC<TodoItemCheckProps> = ({ }) => {
  return (
    <div className="relative w-full h-full p-2 grid place-items-center">
      <div className="w-full max-w-7 aspect-square rounded-full border-2 border-slate-100/20" />
    </div>
  )
}

export default TodoItemCheck