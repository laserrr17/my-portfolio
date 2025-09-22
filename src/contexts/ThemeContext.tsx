"use client"

import React, { createContext, useContext, useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

export type ColorTheme = 'light' | 'dark' | 'green'
export type SystemTheme = 'light' | 'dark' | 'system'

interface ThemeContextType {
  colorTheme: ColorTheme
  systemTheme: SystemTheme
  setColorTheme: (theme: ColorTheme) => void
  setSystemTheme: (theme: SystemTheme) => void
  resolvedTheme: 'light' | 'dark'
  mounted: boolean
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function useCustomTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useCustomTheme must be used within a CustomThemeProvider')
  }
  return context
}

interface CustomThemeProviderProps {
  children: React.ReactNode
}

export function CustomThemeProvider({ children }: CustomThemeProviderProps) {
  const { theme: systemTheme, setTheme: setSystemTheme, resolvedTheme } = useTheme()
  const [colorTheme, setColorTheme] = useState<ColorTheme>('green')
  const [mounted, setMounted] = useState(false)

  // Handle hydration
  useEffect(() => {
    setMounted(true)
    // Load saved color theme from localStorage
    const savedColorTheme = localStorage.getItem('color-theme') as ColorTheme
    if (savedColorTheme && ['light', 'dark', 'green'].includes(savedColorTheme)) {
      setColorTheme(savedColorTheme)
    }
  }, [])

  // Save color theme to localStorage
  useEffect(() => {
    if (mounted) {
      localStorage.setItem('color-theme', colorTheme)
    }
  }, [colorTheme, mounted])

  // Apply theme classes to document
  useEffect(() => {
    if (mounted && resolvedTheme) {
      // Remove all theme classes
      document.documentElement.classList.remove('light', 'dark', 'green')
      
      // Add the appropriate classes
      if (colorTheme === 'green') {
        document.documentElement.classList.add('green')
      } else if (colorTheme === 'light') {
        document.documentElement.classList.add('light')
      } else if (colorTheme === 'dark') {
        document.documentElement.classList.add('dark')
      } else {
        // Fallback to system theme
        document.documentElement.classList.add(resolvedTheme)
      }
    }
  }, [colorTheme, resolvedTheme, mounted])

  const handleSetColorTheme = (theme: ColorTheme) => {
    setColorTheme(theme)
  }

  const handleSetSystemTheme = (theme: SystemTheme) => {
    setSystemTheme(theme)
  }

  // Provide consistent values for SSR and client
  const contextValue = {
    colorTheme: mounted ? colorTheme : 'green', // Use default during SSR
    systemTheme: (systemTheme as SystemTheme) || 'system',
    setColorTheme: handleSetColorTheme,
    setSystemTheme: handleSetSystemTheme,
    resolvedTheme: (resolvedTheme as 'light' | 'dark') || 'dark',
    mounted,
  }

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  )
}
