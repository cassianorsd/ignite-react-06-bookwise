import { ComponentProps } from 'react'
import { Container } from './styles'

interface SearchInputProps extends ComponentProps<typeof Container> {
  selected?: boolean
}

export function TagButton({ selected = false, ...props }: SearchInputProps) {
  return <Container {...props} selected={selected} />
}
