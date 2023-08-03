import { styled } from '@/styles'
import { Star } from 'phosphor-react'

export const HalfStar = styled('button', {
  all: 'unset',
  overflow: 'hidden',
  display: 'inline-block',
  // '&:hover': {
  //   svg: {
  //     color: '$white',
  //   },
  // },
  variants: {
    secondHalf: {
      true: {
        svg: {
          transform: 'translateX(-50%)',
        },
      },
    },
  },
  defaultVariants: {
    secondHalf: false,
  },
})

export const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$1',
  svg: {
    color: '$purple100',
  },
  variants: {
    size: {
      sm: {
        svg: {
          width: 16,
          height: 16,
        },
        [`${HalfStar}`]: {
          width: 8,
        },
      },
      md: {
        svg: {
          width: 20,
          height: 20,
        },
        [`${HalfStar}`]: {
          width: 10,
        },
      },
      lg: {
        svg: {
          width: 28,
          height: 28,
        },
        [`${HalfStar}`]: {
          width: 14,
        },
      },
    },
    selectable: {
      true: {
        svg: {
          cursor: 'pointer',
        },
      },
      false: {
        cursor: 'default',
      },
    },
  },
  defaultVariants: {
    size: 'sm',
    selectable: false,
  },
})
