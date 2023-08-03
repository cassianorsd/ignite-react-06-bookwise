import { styled } from '@/styles'

export const Container = styled('form', {
  background: '$gray700',
  borderRadius: 8,
  padding: '$6',
  display: 'flex',
  flexDirection: 'column',
  gap: '$6',
})

export const Header = styled('div', {
  display: 'flex',
  gap: '$4',
  width: '100%',
  '> div:nth-child(2)': {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
  },
  '> div:nth-child(1)': {
    display: 'flex',
    alignItems: 'center',
  },
})

export const Content = styled('div', {})

export const FormButton = styled('button', {
  all: 'unset',
  borderRadius: 4,
  background: '$gray600',
  lineHeight: 0,
  padding: '$2',
  cursor: 'pointer',
  '&:hover': {
    background: '$gray500',
  },
  svg: {
    width: 24,
    height: 24,
  },
})

export const Footer = styled('div', {
  display: 'flex',
  gap: '$2',
  justifyContent: 'flex-end',
  [`${FormButton}:nth-child(1)`]: {
    color: '$purple100',
  },
  [`${FormButton}:nth-child(2)`]: {
    color: '$green100',
  },
})
