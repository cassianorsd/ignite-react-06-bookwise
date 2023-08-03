import { styled } from '@/styles'
import sidebarBackground from '../../assets/sidebar-background.png'
import { Text } from '../Text'

export const Container = styled('aside', {
  width: 232,
  height: '100%',
  background: `url(${sidebarBackground.src}) no-repeat center center`,
  backgroundSize: 'cover',
  padding: '$10 3rem $6',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
})

export const LogoContainer = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '$2',
  [`${Text}`]: {
    background: '$gradient-horizontal',
    backgroundClip: 'text',
    '-webkit-background-clip': 'text',
    '-webkit-text-fill-color': 'transparent',
  },
})

export const Links = styled('nav', {
  flex: 1,
  marginTop: 64,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  gap: '$4',
})

export const ProfileContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  fontWeight: '$bold',
  fontSize: '$sm',
  // svg: {
  //   width: 20,
  //   height: 20,
  // },
})
