import { Heading } from '@/components/Heading'
import { styled } from '@/styles'

export const Container = styled('div', {
  padding: '3.5rem 6rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '$10',
  width: '100%',
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
})

export const PageContent = styled('main', {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '4rem',
})
