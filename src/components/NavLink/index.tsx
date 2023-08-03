import { styled } from '@/styles'
import Link from 'next/link'

export const NavLink = styled(Link, {
  padding: '$2 0',
  display: 'flex',
  alignItems: 'center',
  fontSize: '$md',
  gap: '$3',
  textDecoration: 'none',
  lineHeight: 1.6,
  position: 'relative',
  svg: {
    width: 24,
    height: 24,
  },
  variants: {
    active: {
      true: {
        fontWeight: '$bold',
        color: '$gray100',
        '&:before': {
          content: '""',
          width: 4,
          height: 24,
          background: '$gradient-vertical',
          position: 'absolute',
          left: -20,
          borderRadius: '$md',
        },
      },
      false: {
        color: '$gray400',
        fontWeight: '$regular',
      },
    },
  },
  defaultVariants: {
    active: false,
  },
})
