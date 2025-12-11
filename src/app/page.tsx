'use client'

import { ThemeSwitcher } from '@/components/theme-switcher'
import { Button } from '@heroui/react'

export default function Home() {
  return (
    <main className="grid min-h-screen place-items-center">
      <Button>Hello World!</Button>
      <ThemeSwitcher />
    </main>
  )
}
