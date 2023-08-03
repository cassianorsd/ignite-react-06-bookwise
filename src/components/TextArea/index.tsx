import { styled } from '@/styles'
import {
  ChangeEvent,
  ComponentProps,
  ElementRef,
  forwardRef,
  useState,
} from 'react'

const Container = styled('div', {
  position: 'relative',
})

const Text = styled('textarea', {
  padding: '14px 20px',
  borderRadius: 4,
  border: '1px solid $gray500',
  background: '$gray800',
  fontSize: '$sm',
  width: '100%',
  '&::placeholder': {
    color: '$gray400',
  },
  color: '$gray200',
})

const CharacterCount = styled('div', {
  position: 'absolute',
  bottom: 4,
  right: 8,
  fontSize: '$xs',
  color: '$gray400',
})

type TextAreaProps = ComponentProps<typeof Text>

export const TextArea = forwardRef<ElementRef<typeof Text>, TextAreaProps>(
  (props, ref) => {
    const [charCount, setCharCount] = useState(0)
    function onChange(e: ChangeEvent<HTMLTextAreaElement>) {
      setCharCount(e.target.value.length)
      props.onChange?.(e)
    }
    return (
      <Container>
        <Text ref={ref} {...props} onChange={onChange} />
        <CharacterCount>
          {charCount}
          {props.maxLength && `/${props.maxLength}`}
        </CharacterCount>
      </Container>
    )
  },
)

TextArea.displayName = 'TextArea'
