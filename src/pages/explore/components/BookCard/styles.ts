import { Text } from '@/components/Text'
import { styled } from '@/styles'

export const Container = styled('button', {
  all: 'unset',
  borderRadius: 8,
  backgroundColor: '$gray700',
  display: 'flex',
  gap: '$5',
  padding: '$4 $5',
  cursor: 'pointer',
  transition: 'all 0.2s ease-in-out',
  '&:hover': {
    backgroundColor: '$gray500',
  },
  position: 'relative',
})

export const BookCover = styled('div', {
  img: {
    width: 108,
    height: 152,
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

export const AlreadyReadBadge = styled('div', {
  position: 'absolute',
  top: 0,
  right: 0,
  padding: '$1 $3',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '$sm',
  fontWeight: '$bold',
  color: '$green100',
  textTransform: 'uppercase',
  background: '$green300',
  borderRadius: '0px 4px 0px 4px',
})
