import { styled } from '@/styles'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
  maxWidth: 324,
  flex: 1,
})

export const SectionTitle = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  h3: {
    fontSize: '$sm',
    lineHeight: 1.6,
    fontWeight: '$regular',
  },
})

export const BooksList = styled('div', {})
