import { styled } from '@/styles'
import Link from 'next/link'

export const ActionLink = styled(Link, {
  textDecoration: 'none',
  fontWeight: '$bold',
  lineHeight: 1.6,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '$1 $2',
  borderRadius: '$sm',
  fontSize: '$sm',
  svg: {
    width: 20,
    height: 20,
  },

  variants: {
    size: {
      sm: {
        gap: '$2',
      },
      md: {
        gap: '$3',
      },
    },
    variant: {
      white: {
        color: '$gray200',
        '&:hover': {
          background: 'rgba(230, 232, 242, 0.04);',
        },
      },
      purple: {
        color: '$purple100',
        '&:hover': {
          background: 'rgba(131, 129, 217, 0.06);',
        },
      },
    },
  },
})
