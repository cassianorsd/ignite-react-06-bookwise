import { Box } from '@/components/Box'
import { Text } from '@/components/Text'
import { styled } from '@/styles'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$2',
})

export const Card = styled(Box, {
  display: 'flex',
  flexDirection: 'column',
  gap: '$8',
  '& + &': {
    marginTop: '$3',
  },
})

export const CardContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
})

export const BookContainer = styled('div', {
  width: '100%',
  display: 'flex',
  gap: '$5',
  '& + &': {
    marginTop: '$3',
  },
  padding: 0,
})

export const BookCover = styled('div', {
  img: {
    width: 98,
    height: 134,
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
    fontSize: '$lg',
    lineHeight: 1.4,
  },
  [`${Text}`]: {
    fontSize: '$sm',
    fontWeight: '$regular',
    color: '$gray400',
    lineHeight: 1.6,
  },
})
