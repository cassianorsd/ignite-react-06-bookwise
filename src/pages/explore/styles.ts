import { Heading } from '@/components/Heading'
import { styled } from '@/styles'

export const Container = styled('div', {
  padding: '3.5rem 6rem',
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  gap: '$10',
})

export const PageHeader = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$10',
  [`${Heading}`]: {
    display: 'flex',
    alignItems: 'center',
    gap: '$3',
    svg: {
      width: 32,
      height: 32,
      color: '$green100',
    },
  },
  'div:nth-child(1)': {
    display: 'flex',
    justifyContent: 'space-between',
  },
  '.search-container': {
    width: 433,
  },
})

export const Tags = styled('div', {
  display: 'flex',
  gap: '$3',
})

export const Books = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  gap: '$5',
})
