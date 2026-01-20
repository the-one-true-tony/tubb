'use client'

import { createContext, useContext } from 'react'
import { theme } from '../theme'
import { useGlobalStyles } from './globalStyles'

const ThemeContext = createContext(theme)

export const useTheme = () => useContext(ThemeContext)

export default function JssProvider({ children }) {
  useGlobalStyles()
  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  )
}
