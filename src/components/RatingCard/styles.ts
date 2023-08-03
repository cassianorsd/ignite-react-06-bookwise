import { styled } from '@/styles'
import { Box } from '../Box'
import { Text } from '../Text'

export const Container = styled(Box, {
  display: 'flex',
  flexDirection: 'column',
  gap: '$8',
  '& + &': {
    marginTop: '$3',
  },
})

export const CardHeader = styled('div', {
  display: 'flex',
  alignItems: 'flex-start',
  gap: '$4',
  '> div:nth-child(2)': {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  a: {
    fontSize: '$md',
    lineHeight: 1.6,
    color: '$gray100',
    textDecoration: 'none',
  },
  '.createdAt': {
    fontSize: '$sm',
    color: '$gray400',
    lineHeight: 1.6,
  },
})

export const CardBody = styled('div', {
  display: 'flex',
  gap: '$5',
})

export const CardContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
})

export const BookInfo = styled('div', {
  [`${Text}`]: {
    color: '$gray400',
  },
})

export const BookCover = styled('div', {
  img: {
    width: 108,
    height: 152,
    borderRadius: '$xs',
  },
})
