import { FC } from 'react'
import ThemeToggle from './theme/ThemeToggle'

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

      <ThemeToggle />
    </div>
  )
}

export default Header