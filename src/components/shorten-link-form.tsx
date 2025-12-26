'use client'

import { validateUrl } from '@/lib/utils'
import {
  Form,
  Button,
  FieldError,
  Input,
  Label,
  TextField,
} from '@heroui/react'

export function ShortenLinkForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const url = formData.get('url') as string
    console.log('Submitting URL:', url)
  }

  return (
    <article className="w-full md:max-w-2xl">
      <Form onSubmit={handleSubmit} className="flex w-full items-center gap-4">
        <TextField
          autoFocus
          isRequired
          className="grow"
          validate={(value) => {
            if (!validateUrl(value)) return 'Url invalida'
          }}
        >
          <Label>Ingresa tu enlace aquí:</Label>
          <Input
            type="url"
            name="url"
            placeholder="https://website.com"
            className="w-full"
          />
          <div className="h-5">
            <FieldError className="inline-block">Url invalida</FieldError>
          </div>
        </TextField>
        <div>
          <Button type="submit">Acortar</Button>
        </div>
      </Form>
    </article>
  )
}
