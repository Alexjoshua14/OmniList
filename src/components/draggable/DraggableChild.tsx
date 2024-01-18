import { FC, HTMLAttributes } from 'react'

interface DraggableChildProps extends HTMLAttributes<HTMLDivElement> {
  dragStart: () => void
  dragEnd: () => void
  dragEnter: () => void
}

const DraggableChild: FC<DraggableChildProps> = ({ dragStart, dragEnter, dragEnd, children }) => {
  return (
    <div
      draggable
      onDragStart={dragStart}
      onDragEnter={dragEnter}
      onDragEnd={dragEnd}
      className="cursor-grab w-full h-full active:cursor-grabbing"
    >
      {children}
    </div>
  )
}

export default DraggableChild