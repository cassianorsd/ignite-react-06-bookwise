import { styled } from '@/styles'

export const Container = styled('div', {
  maxWidth: 608,
  flex: 1,
  '> p ': {
    fontSize: '$sm',
    lineHeight: 1.6,
  },
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
})

export const SectionTitle = styled('h3', {
  fontSize: '$sm',
  lineHeight: 1.6,
  fontWeight: '$regular',
})

export const Content = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
})

export const RatingsList = styled('div', {})
