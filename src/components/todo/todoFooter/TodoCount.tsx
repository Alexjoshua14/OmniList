'use client'

import { useAppSelector } from '@/redux/hooks'
import { FC } from 'react'

interface TodoCountProps {

}

const TodoCount: FC<TodoCountProps> = ({ }) => {
  // TODO: Change count to just uncompleted todos
  const count = useAppSelector(state => state.todos.length)

  return (
    <div>
      <p>
        {`${count} items left`}
      </p>
    </div>
  )
}

export default TodoCount