import { styled } from '@/styles'
import { ComponentProps, ElementType } from 'react'

export const Button = styled('button', {
  all: 'unset',
  borderRadius: 8,
  display: 'flex',
  alignItems: 'center',
  gap: '$2',
  fontSize: '$md',
  fontWeight: '$bold',

  cursor: 'pointer',
  svg: {
    width: '1rem',
    height: '1rem',
  },
  '&:disabled': {
    cursor: 'not-allowed',
  },
  '&:focus': {
    boxShadow: '0 0 0 2px $colors$green200',
  },
  variants: {
    variant: {
      primary: {
        background: '$gray600',
        '&:not(:disabled):hover': {
          background: '$gray500',
        },
        '&:disabled': {
          background: '$gray300',
          color: '$gray500',
        },
      },
      tertiary: {
        background: 'transparent',
        '&:not(:disabled):hover': {
          background: 'rgba(230, 232, 242, 0.04);',
          color: '$white',
        },
        '&:disabled': {
          background: 'rgba(230, 232, 242, 0.04);',
          color: '$gray600',
        },
      },
    },
    size: {
      sm: {},
      md: {
        gap: '$3',
        padding: '$1',
        svg: {
          width: '1.25rem',
          height: '1.25rem',
        },
      },
      lg: {
        gap: '$5',
        padding: '$5 $6',
        svg: {
          width: '2rem',
          height: '2rem',
        },
      },
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
  // borderRadius: '$sm',
  // fontSize: '$sm',
  // fontWeight: '$medium',
  // fontFamily: '$default',
  // textAlign: 'center',
  // minWidth: 120,
  // boxSizing: 'border-box',
  // padding: '0 $4',
  // display: 'flex',
  // alignItems: 'center',
  // justifyContent: 'center',
  // gap: '$2',
  // cursor: 'pointer',
  // svg: {
  //   width: '$4',
  //   height: '$4',
  // },
  // '&:disabled': {
  //   cursor: 'not-allowed',
  // },
  // '&:focus': {
  //   boxShadow: '0 0 0 2px $colors$gray100',
  // },
  // variants: {
  //   variant: {
  //     primary: {
  //       color: '$white',
  //       background: '$green500',
  //       '&:not(:disabled):hover': {
  //         background: '$green300',
  //       },
  //       '&:disabled': {
  //         background: '$gray200',
  //       },
  //     },
  //     secondary: {
  //       color: '$green300',
  //       border: '2px solid $green500',
  //       '&:not(:disabled):hover': {
  //         background: '$green500',
  //         color: '$white',
  //       },
  //       '&:disabled': {
  //         color: '$gray200',
  //         borderColor: '$gray200',
  //       },
  //     },
  //     tertiary: {
  //       color: '$gray100',
  //       '&:not(:disabled):hover': {
  //         color: '$white',
  //       },
  //       '&:disabled': {
  //         color: '$gray600',
  //       },
  //     },
  //   },
  //   size: {
  //     sm: {
  //       height: 38,
  //     },
  //     md: {
  //       height: 46,
  //     },
  //   },
  // },
  // defaultVariants: {
  //   variant: 'primary',
  //   size: 'md',
  // },
})

export interface ButtonProps extends ComponentProps<typeof Button> {
  as?: ElementType
}

Button.displayName = 'Button'
