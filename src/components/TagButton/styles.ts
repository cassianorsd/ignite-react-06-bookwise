import { styled } from '@/styles'

export const Container = styled('button', {
  all: 'unset',
  padding: '$1 $4',
  borderRadius: '$full',
  border: '1px solid $purple100',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',
  fontSize: '$md',
  lineHeight: '$base',
  cursor: 'pointer',
  transition: 'all 0.2s ease-in-out',
  '&:hover': {
    borderColor: '$purple100',
    background: '$purple200',
    color: '$gray100',
  },
  variants: {
    selected: {
      true: {
        color: '$gray100',
        background: '$purple200',
        borderColor: '$purple200',
      },
      false: {
        color: '$purple100',
        background: 'transparent',
      },
    },
  },
  defaultVariants: {
    selected: false,
  },
})
