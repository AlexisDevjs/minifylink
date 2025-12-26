'use client'

import { Theme } from '@/types/types'
import { Button } from '@heroui/react'
import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'

export function ThemeSwitcher() {
  const [theme, setTheme] = useState<Theme | null>(null)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme | null

    if (savedTheme === 'light' || savedTheme === 'dark') {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setTheme(savedTheme)
    } else {
      const prefersDark = window.matchMedia(
        '(prefers-color-scheme: dark)',
      ).matches

      setTheme(prefersDark ? 'dark' : 'light')
    }
  }, [])

  useEffect(() => {
    if (!theme) return
    document.documentElement.classList.toggle('dark', theme === 'dark')
    localStorage.setItem('theme', theme)
  }, [theme])

  // 3️⃣ Evitar hydration mismatch
  if (!theme) return null

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  return (
    <Button isIconOnly variant="tertiary" onPress={toggleTheme}>
      {theme === 'dark' ? <Moon /> : <Sun />}
    </Button>
  )
}
