import { styled } from '@/styles'

export const Container = styled('div', {
  background: '$gray800',
  borderRadius: '$sm',
  padding: '0.875rem 1.25rem',
  display: 'flex',
  alignItems: 'center',
  fontSize: '$sm',
  boxSizing: 'border-box',
  gap: '$2',
  border: '1px solid $colors$gray500',
  svg: {
    color: '$gray500',
    width: 20,
    height: 20,
  },
  '&:focus-within': {
    borderColor: '$green200',
    svg: {
      color: '$green200',
    },
  },
  '&:has(input:disabled)': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
})

export const Input = styled('input', {
  color: '$gray200',
  fontFamily: '$default',
  fontSize: '$sm',
  fontWeight: 'regular',
  background: 'transparent',
  border: 0,
  width: '100%',
  '&::placeholder': {
    color: '$gray400',
  },
  '&:focus': {
    outline: 0,
  },
  '&:disabled': {
    cursor: 'not-allowed',
  },
})
