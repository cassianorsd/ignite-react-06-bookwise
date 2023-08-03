import { styled } from '@/styles'
import { Box } from '../Box'
import { Text } from '../Text'

export const Container = styled(Box, {
  width: '100%',
  display: 'flex',
  gap: '$5',
  '& + &': {
    marginTop: '$3',
  },
  padding: '$4',
  cursor: 'pointer',
  transition: 'all 0.2s ease-in-out',
  '&:hover': {
    backgroundColor: '$gray500',
  },
})

export const BookCover = styled('div', {
  img: {
    width: 64,
    height: 94,
    borderRadius: '$xs',
  },
})

export const BookInfo = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
})

export const BookTitle = styled('div', {
  strong: {
    fontWeight: '$bold',
    fontSize: '$md',
    lineHeight: 1.4,
  },
  [`${Text}`]: {
    fontSize: '$sm',
    fontWeight: '$regular',
    color: '$gray400',
    lineHeight: 1.6,
  },
})
