'use client'

import { FC } from 'react'
import { Provider } from 'react-redux'
import store from '@/redux/store'
import ThemeProvider from './ThemeProvider'

interface ProvidersProps {
  children: React.ReactNode
}

const Providers: FC<ProvidersProps> = ({ children }) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme='system'
      enableSystem
      disableTransitionOnChange
    >
      <Provider store={store}>
        {children}
      </Provider>
    </ThemeProvider>
  )
}

export default Providers