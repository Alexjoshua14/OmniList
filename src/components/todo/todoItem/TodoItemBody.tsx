import { FC } from 'react'

interface TodoItemBodyProps {
  text: string
  completed?: boolean
}

// Fluff: on completion, animate line strikethrough
const TodoItemBody: FC<TodoItemBodyProps> = ({ text, completed }) => {
  return (
    <div className={`relative w-fit max-w-full h-full p-2 flex items-center whitespace-nowrap overflow-ellipsis ${completed ? 'text-muted' : 'text-primary'}`}>
      {text}
      {completed && <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-[2px] bg-muted" />}
    </div>
  )
}

export default TodoItemBody