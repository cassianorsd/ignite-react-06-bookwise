import { Heading } from '@/components/Heading'
import { Text } from '@/components/Text'
import { styled } from '@/styles'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$8',
  alignItems: 'center',
})

export const Info = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$5',
  alignItems: 'center',
  [`${Text}`]: {
    color: '$gray400',
  },
  [`${Heading}`]: {
    justifyContent: 'center',
  },
})

export const Divider = styled('div', {
  width: 32,
  height: 4,
  borderRadius: '$full',
  background: '$gradient-horizontal',
})

export const Stats = styled('div', {
  padding: '1.25rem 3.5rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '$10',
})

export const Stat = styled('div', {
  display: 'flex',
  gap: '$5',
  alignItems: 'center',
  [`${Text}`]: {
    color: '$gray300',
  },
  strong: {
    lineHeight: '$short',
  },
  svg: {
    width: 32,
    height: 32,
    color: '$green100',
  },
})
