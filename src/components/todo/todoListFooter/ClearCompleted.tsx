'use client'

import { useAppDispatch } from '@/redux/hooks'
import { clearCompleted } from '@/redux/slices/todoSlice'
import { FC } from 'react'

interface ClearCompletedProps {

}

const ClearCompleted: FC<ClearCompletedProps> = ({ }) => {
  const dispatch = useAppDispatch()

  return (
    <div>
      <button
        onClick={() => dispatch(clearCompleted())}
      >
        <p>
          {`Clear Completed`}
        </p>
      </button>
    </div>
  )
}

export default ClearCompleted