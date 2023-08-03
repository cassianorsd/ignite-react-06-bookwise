import { styled } from '@/styles'

export const Container = styled('div', {
  maxWidth: 608,
  flex: 1,
  // '> p ': {
  //   fontSize: '$sm',
  //   lineHeight: 1.6,
  // },
  display: 'flex',
  flexDirection: 'column',
  gap: '$8',
  marginBottom: '$8',
})

export const Ratings = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$6',
})
