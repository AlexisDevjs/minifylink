import { ShortenLinkForm } from '@/components/shorten-link-form'
import { ThemeSwitcher } from '@/components/theme-switcher'

export default function Home() {
  return (
    <div className="container mx-auto flex min-h-svh flex-col items-center">
      <header>
        <ThemeSwitcher />
      </header>
      <main className="grow content-center">
        <section className="flex flex-col items-center justify-items-center gap-10">
          <h1 className="text-3xl md:text-5xl">
            Pequeños enlaces para grandes ideas
          </h1>
          <p className="max-w-xl">
            Acorta tus enlaces al instante y conviértelo en una URL pequeña
            lista para compartir. Sin complicaciones, sin registro y con una
            experiencia rápida y ligera.
          </p>
          <ShortenLinkForm />
        </section>
      </main>
    </div>
  )
}
