'use client'

import { useTheme } from 'next-themes'
import Image from 'next/image'
import { FC } from 'react'

interface TopBackgroundProps {

}

const TopBackground_Figma: FC<TopBackgroundProps> = ({ }) => {
  const { theme } = useTheme()
  const light = theme === 'light'

  return (
    <div className="relative w-full h-full">
      <Image src={`/images/bg-mobile-${light ? 'light' : 'dark'}.jpg`} alt="" fill sizes="100vw" quality={100} className="sm:hidden object-cover" />
      <Image src={`/images/bg-desktop-${light ? 'light' : 'dark'}.jpg`} alt="" fill sizes="100vw" quality={100} className="hidden sm:flex object-cover" />
    </div>
  )
}

const TopBackground: FC<TopBackgroundProps> = ({ }) => {
  return (
    <div className="relative w-full h-full opacity-60 overflow-clip" style={{ background: 'hsl(var(--background-accent))' }}>
      <div>
        <div className="absolute w-80 h-80 -top-4 left-20 rounded-full blur opacity-70 mix-blend-multiply" style={{ background: 'radial-gradient(hsl(var(--background-accent-1)) 0%, transparent 60%)' }} />
        <div className="absolute w-[600px] h-96 bottom-0 right-0 rotate-12 rounded-full blur opacity-70 mix-blend-multiply" style={{ background: 'radial-gradient(hsl(var(--background-accent-2)) 0%, transparent 60%)' }} />
        <div className="absolute w-[600px] h-[200px] bottom-0 left-0 rotate-3 rounded-full blur opacity-40 mix-blend-multiply" style={{ background: 'radial-gradient(hsl(var(--background-accent-2)) 0%, transparent 60%)' }} />
      </div>
    </div>
  )
}

const TopBackground2: FC<TopBackgroundProps> = ({ }) => {
  return (
    <div className="relative w-full h-full opacity-60 overflow-clip" style={{ background: 'hsl(var(--background-primary))' }}>
      <div>
        <div className="absolute w-80 h-80 -top-4 left-20 rounded-full blur opacity-70 mix-blend-multiply" style={{ background: 'radial-gradient(hsl(var(--background-accent-1)) 0%, transparent 60%)' }} />
        <div className="absolute w-[600px] h-96 bottom-0 right-0 rotate-12 rounded-full blur opacity-70 mix-blend-multiply" style={{ background: 'radial-gradient(hsl(var(--background-accent-2)) 0%, transparent 60%)' }} />
        <div className="absolute w-[600px] h-[200px] bottom-0 left-0 rotate-3 rounded-full blur opacity-40 mix-blend-multiply" style={{ background: 'radial-gradient(hsl(var(--background-accent-2)) 0%, transparent 60%)' }} />
        <div className="absolute w-[800px] h-40 bottom-0 left-0 -rotate-6 rounded-full blur-xl opacity-70 mix-blend-multiply" style={{ background: 'radial-gradient(hsl(var(--background-accent-2)) 0%, transparent 60%)' }} />
        <div className="absolute w-[500px] h-[900px] bottom-0 left-0 rounded-full blur opacity-80 mix-blend-multiply" style={{ background: 'radial-gradient(hsl(var(--background-accent-2)) 0%, transparent 60%)' }} />
      </div>
    </div>
  )
}

const TopBackground3: FC<TopBackgroundProps> = ({ }) => {
  return (
    <div className="relative w-full h-full opacity-60 overflow-clip" style={{ background: 'hsl(var(--background-primary))' }}>
      <div className="absolute w-80 h-32 -rotate-12 blur-2xl rounded-full" style={{ background: 'hsl(var(--text-active))' }} />
      <div className="absolute top-1/2 right-1/4 w-40 h-96 blur-2xl opacity-50 rounded-full" style={{ background: 'hsl(var(--text-active))' }} />
    </div>
  )
}

const TopBackground4: FC<TopBackgroundProps> = ({ }) => {
  return (
    <div className="relative w-full h-full overflow-clip" style={{ background: 'hsl(var(--background-primary))' }}>
      <div>
        <div className="absolute w-80 h-80 -top-4 left-20 rounded-full opacity-40 blur-3xl mix-blend-multiply" style={{ background: 'radial-gradient(hsl(var(--background-accent)) 0%, transparent 60%)' }} />
        <div className="absolute w-[600px] h-96 bottom-0 right-0 rotate-12 rounded-full opacity-40 blur-3xl mix-blend-multiply" style={{ background: 'radial-gradient(hsl(var(--background-accent)) 0%, transparent 60%)' }} />
        <div className="absolute w-[600px] h-[200px] bottom-0 left-0 rotate-3 rounded-full opacity-40 blur-3xl mix-blend-multiply" style={{ background: 'radial-gradient(hsl(var(--background-accent)) 0%, transparent 60%)' }} />
        <div className="absolute w-[1000px] h-[400px] top-0 right-0  rotate-45 rounded-full opacity-40 blur-3xl mix-blend-multiply" style={{ background: 'radial-gradient(hsl(var(--background-accent)) 0%, transparent 60%)' }} />
        <div className="absolute w-[600px] h-[500px] top-1/2 left-1/3 rounded-full opacity-80 blur-3xl mix-blend-multiply" style={{ background: 'radial-gradient(hsl(var(--background-accent)) 0%, transparent 60%)' }} />
      </div>
    </div>
  )
}

export default TopBackground_Figma