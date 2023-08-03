import { Text } from '@/components/Text'
import { styled } from '@/styles'
import Image from 'next/image'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  padding: '$4',
  height: '100vh',
  width: '100vw',
})

export const Hero = styled(Image, {
  height: '100%',
  maxHeight: '984px',
  '@media (max-width: 768px)': {
    display: 'none',
  },
})

export const Content = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
})

export const LoginContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$10',
  [`${Text}`]: {
    color: '$gray200',
  },
})

export const LoginOptions = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
})
