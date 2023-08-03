import { ComponentProps, ElementRef, forwardRef } from 'react'
import { Container, Input } from './styles'
import { MagnifyingGlass } from 'phosphor-react'

type SearchInputProps = ComponentProps<typeof Input>

export const SearchInput = forwardRef<
  ElementRef<typeof Input>,
  SearchInputProps
>((props, ref) => {
  return (
    <Container>
      <Input ref={ref} {...props} />
      <MagnifyingGlass />
    </Container>
  )
})

SearchInput.displayName = 'SearchInput'
