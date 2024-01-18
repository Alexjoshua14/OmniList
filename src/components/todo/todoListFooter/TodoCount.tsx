'use client'

import { useAppSelector } from '@/redux/hooks'
import { selectCount } from '@/redux/slices/todoSlice'
import { FC } from 'react'

interface TodoCountProps {

}

const TodoCount: FC<TodoCountProps> = ({ }) => {
  // TODO: Change count to just uncompleted todos
  const count = useAppSelector(selectCount)

  return (
    <div>
      <p>
        {`${count} items left`}
      </p>
    </div>
  )
}

export default TodoCount