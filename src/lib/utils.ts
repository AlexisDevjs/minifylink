import { Theme } from '@/types/types'

export function getThemeFromStorage() {
  if (typeof window === 'undefined') return 'light'

  const savedTheme = localStorage.getItem('theme') as Theme | null

  if (savedTheme === 'dark' || savedTheme === 'light') return savedTheme

  const match = window.matchMedia('(prefers-color-scheme: dark)').matches
  return match ? 'dark' : 'light'
}
