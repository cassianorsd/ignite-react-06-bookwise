import { styled } from '@/styles'
import * as Dialog from '@radix-ui/react-dialog'
import { keyframes } from '@stitches/react'
import { Box } from '../Box'
import { Text } from '../Text'
import { Button } from '../Button'

const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
})

export const Overlay = styled(Dialog.Overlay, {
  backgroundColor: 'rgba(0, 0, 0, .55)',
  position: 'fixed',
  inset: 0,
  animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
})

const slideFromTheRight = keyframes({
  '0%': { transform: 'translateX(100%)' },
  '100%': { transform: 'translateX(0)' },
})

export const Content = styled(Dialog.Content, {
  backgroundColor: '$gray800',
  position: 'fixed',
  right: 0,
  top: 0,
  height: '100vh',
  width: 660,
  boxShadow: '-4px 0px 30px 0px rgba(0, 0, 0, 0.50);',
  animation: `${slideFromTheRight} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  padding: '64px 48px',
  overflowY: 'scroll',
  display: 'flex',
  flexDirection: 'column',
  gap: 40,
})

export const Title = styled(Dialog.Title, {})

export const CloseButton = styled(Dialog.Close, {
  all: 'unset',
  lineHeight: 0,
  border: 'none',
  cursor: 'pointer',
  color: '$gray400',
  svg: {
    width: 24,
    height: 24,
  },
  position: 'absolute',
  top: 24,
  right: 48,
})

export const Description = styled(Dialog.Description, {})

export const BookContainer = styled(Box, {
  padding: 32,
  display: 'flex',
  flexDirection: 'column',
  gap: 40,
  '> div:nth-child(1)': {
    display: 'flex',
    gap: 32,
  },
})

export const BookCover = styled('div', {
  img: {
    width: 171,
    height: 242,
  },
})

export const BookInfo = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  '> div:nth-child(1)': {
    display: 'flex',
    flexDirection: 'column',
    gap: '$2',
    [`${Text}`]: {
      color: '$gray300',
    },
  },
  '> div:nth-child(2)': {
    display: 'flex',
    flexDirection: 'column',
    gap: '$2',
    [`${Text}`]: {
      color: '$gray400',
    },
  },
})

export const BookStats = styled('div', {
  borderTop: '1px solid $gray600',
  display: 'flex',
  padding: '$6 0',
  justifyContent: 'space-between',
  gap: 56,
})

export const BookStat = styled('div', {
  flex: 1,
  display: 'flex',
  gap: '$4',
  alignItems: 'center',
  svg: {
    width: 24,
    height: 24,
    color: '$green100',
  },
})

export const Ratings = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$3',
  '> div:nth-child(1)': {
    marginBottom: '$1',
    display: 'flex',
    justifyContent: 'space-between',
    [`${Button}`]: {
      color: '$purple100',
    },
  },
  marginBottom: '$10',
})

export const RatingCard = styled(Box, {
  display: 'flex',
  flexDirection: 'column',
  gap: '$5',
  variants: {
    ownedByUser: {
      true: {
        background: '$gray600',
      },
      false: {},
    },
  },
  defaultVariants: {
    ownedByUser: false,
  },
})

export const RatingHeader = styled('div', {
  display: 'flex',
  // alignItems: 'center',
  gap: '$4',
  '> div:nth-child(2)': {
    flex: 1,
  },
  '> div:nth-child(1)': {
    display: 'flex',
    alignItems: 'center',
  },
})

export const RatingContent = styled('div', {})
