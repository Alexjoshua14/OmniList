import { FC, HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

interface GradientCircleProps extends HTMLAttributes<HTMLDivElement> {
  borderWidth?: number
  active?: boolean
}

export const GradientCircle: FC<GradientCircleProps> = ({ active, borderWidth, children, className, ...props }) => {
  borderWidth = borderWidth ?? 2
  return (
    <div
      className={cn(`
        relative w-full max-w-7 aspect-square rounded-full 
        from-accent-gradient-pink to-accent-gradient-blue 
        ${active ? 'bg-gradient-to-tl' : 'bg-border hover:bg-gradient-to-tl'}
        `, className)}
      {...props}
    >
      <div
        className={`
          absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 
           aspect-square rounded-full 
          ${active ? 'bg-gradient-to-tl' : 'bg-secondary'}
          `}
        style={{ width: `calc(100% - ${borderWidth}px)` }}
      >
        {children}
      </div>
    </div>
  )
}