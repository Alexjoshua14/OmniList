'use client'

import { FC, HTMLAttributes, ReactNode, useCallback, useEffect, useState } from 'react'
import DraggableChild from './DraggableChild'

type ReactNodeWithKey = ReactNode & { key: string }

interface DraggableProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode[]
  onReorder?: (from: number, to: number) => void
}

// TOOD: Refine keys
const Draggable: FC<DraggableProps> = ({ children, onReorder }) => {
  const [divs, setDivs] = useState<ReactNode[]>([])
  const [currentDiv, setCurrentDiv] = useState<number>(-1)
  const [toDiv, setToDiv] = useState<number>(-1)

  useEffect(() => {
    setDivs(Array.from(children))
  }, [children])

  const insertElement = useCallback(() => {
    if (currentDiv === -1 || toDiv === -1) return
    setDivs((prevOrder) => {
      const withElemRemoved = prevOrder.filter((_, i) => i !== currentDiv)
      const elemToMove = prevOrder[currentDiv]
      return [...withElemRemoved.slice(0, toDiv), elemToMove, ...withElemRemoved.slice(toDiv)]
    })
  }, [currentDiv, toDiv])

  const dragStart = useCallback((index: number) => {
    setCurrentDiv(index)
  }, [])

  const dragEnter = useCallback((index: number) => {
    setToDiv(index)
  }, [])

  const dragEnd = useCallback(() => {
    if (onReorder)
      onReorder(currentDiv, toDiv)
    else
      insertElement()
  }, [insertElement, onReorder, currentDiv, toDiv])

  return (
    <>
      {divs.map((div, i) => (
        <DraggableChild
          key={(div as ReactNodeWithKey)?.key}
          dragStart={() => dragStart(i)}
          dragEnter={() => dragEnter(i)}
          dragEnd={dragEnd}
        >
          {div}
        </DraggableChild>
      ))}
    </>
  )
}

export default Draggable