import { useAppDispatch } from '@/redux/hooks'
import { removeTodo } from '@/redux/slices/todoSlice'
import { Cross1Icon } from '@radix-ui/react-icons'
import { FC } from 'react'

interface TodoItemDeleteProps {
  id: string
}

const TodoItemDelete: FC<TodoItemDeleteProps> = ({ id }) => {
  const dispatch = useAppDispatch()
  const deleteTodo = () => {
    dispatch(removeTodo(id))
  }

  return (
    <button
      className="hidden items-center justify-center group-hover:flex active:opacity-60"
      onClick={deleteTodo}
    >
      <Cross1Icon />
    </button>
  )
}

export default TodoItemDelete