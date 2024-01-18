'use client'

import { FC, HTMLAttributes, ReactComponentElement, ReactNode, useCallback, useEffect, useState } from 'react'
import DraggableChild from './DraggableChild'

interface DraggableProps extends HTMLAttributes<HTMLElement> {
  children: Iterable<ReactNode>
}

// TOOD: Refine keys
const Draggable: FC<DraggableProps> = ({ children }) => {
  const [divs, setDivs] = useState<ReactNode[]>([])
  const [currentDiv, setCurrentDiv] = useState<number>(-1)
  const [toDiv, setToDiv] = useState<number>(-1)

  useEffect(() => {
    setDivs(Array.from(children))
  }, [children])

  const insertElement = useCallback(() => {
    if (currentDiv === -1 || toDiv === -1) return
    setDivs((prevOrder) => {
      const withElemRemvoed = prevOrder.filter((_, i) => i !== currentDiv)
      return [...withElemRemvoed.slice(0, toDiv), prevOrder[currentDiv], ...withElemRemvoed.slice(toDiv)]
    })
  }, [currentDiv, toDiv])

  const dragStart = useCallback((index: number) => {
    setCurrentDiv(index)
  }, [])

  const dragEnter = useCallback((index: number) => {
    setToDiv(index)
  }, [])

  const dragEnd = useCallback(() => {
    insertElement()
  }, [insertElement])

  return (
    <>
      {divs.map((div, i) => (
        <DraggableChild
          key={div?.toString()}
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