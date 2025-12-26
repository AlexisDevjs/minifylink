export function validateUrl(value: string) {
  const trimmedValue = value.trim()
  if (trimmedValue.length === 0) return false

  try {
    const url = new URL(value)
    return url.protocol === 'http:' || url.protocol === 'https:'
  } catch {
    return false
  }
}
