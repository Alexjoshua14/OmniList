'use client'

import { Filter } from '@/lib/types/reduxTypes'
import { useAppSelector } from '@/redux/hooks'
import { clearFilters, selectActiveFilter, selectCompletedFilter, toggleFilter } from '@/redux/slices/todoSlice'
import { FC, use } from 'react'
import { useDispatch } from 'react-redux'

interface TodoFiltersProps {

}

const TodoFilters: FC<TodoFiltersProps> = ({ }) => {
  const activeFilter = useAppSelector(selectActiveFilter)
  const completedFilter = useAppSelector(selectCompletedFilter)
  const dispatch = useDispatch()

  return (
    <div className="flex items-center gap-4">
      <button
        onClick={() => dispatch(clearFilters())}
        className={`${activeFilter || completedFilter ? 'text-white/40' : 'text-white'} `}
      >
        <p>
          {`All`}
        </p>
      </button>
      <button
        onClick={() => dispatch(toggleFilter(Filter.Active))}
        className={`${activeFilter ? 'text-white' : 'text-white/40'} `}
      >
        <p>
          {`Active`}
        </p>
      </button>
      <button
        onClick={() => dispatch(toggleFilter(Filter.Completed))}
        className={`${completedFilter ? 'text-white' : 'text-white/40'} `}
      >
        <p>
          {`Completed`}
        </p>
      </button>
    </div>
  )
}

export default TodoFilters