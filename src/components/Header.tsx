import { FC } from 'react'

interface HeaderProps {

}

const Header: FC<HeaderProps> = ({ }) => {
  return (
    <div
      className="w-full flex items-center justify-between header"
    >
      <h1>
        OmniList
      </h1>

      <div className="relative w-8 h-full aspect-square flex items-center justify-center">
        <div className="w-3 aspect-square rounded-full bg-white" />
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={`sun-${i}`} className="absolute left-1/2 top-1/2 -translate-y-1/2 w-1/2 h-[2px] origin-left flex items-end justify-end" style={{ rotate: `${i * 45}deg` }}>
            <div className="w-1/3 h-full rounded-full" style={{ background: i % 2 === 0 ? 'hsl(233, 11%, 84%)' : 'hsl(0, 0%, 98%)' }} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Header