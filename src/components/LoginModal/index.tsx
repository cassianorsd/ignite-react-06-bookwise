import { styled } from '@/styles'
import * as Dialog from '@radix-ui/react-dialog'
import { keyframes } from '@stitches/react'
import { Box } from '../Box'
import { X } from 'phosphor-react'
import { Text } from '../Text'
import { Button } from '../Button'
import { FcGoogle } from 'react-icons/fc'
import { FaGithub } from 'react-icons/fa'
import { signIn } from 'next-auth/react'

const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
})

const Overlay = styled(Dialog.Overlay, {
  backgroundColor: 'rgba(0, 0, 0, .55)',
  position: 'fixed',
  inset: 0,
  animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
})

const CloseButton = styled(Dialog.Close, {
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
  right: 24,
})

const slideFromTopToBottom = keyframes({
  '0%': { opacity: 0, top: '30%' },
  '100%': { opacity: 1, top: '50%' },
})

const DialogContent = styled(Dialog.Content, {
  backgroundColor: '$gray800',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  boxShadow: '4px 16px 24px 0px rgba(0, 0, 0, 0.25);',
  animation: `${slideFromTopToBottom} 200ms cubic-bezier(0.16, 1, 0.3, 1)`,
})

const Content = styled(Box, {
  padding: '56px 72px',
  display: 'flex',
  flexDirection: 'column',
  gap: 40,
})

const Title = styled(Dialog.Title, {
  fontWeight: '$bold',
  fontSize: '$md',
  lineHeight: '$short',
  textAlign: 'center',
  color: '$gray200',
  width: 372,
})

const Socials = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
})

type LoginModalProps = Dialog.DialogProps

enum Providers {
  GOOGLE = 'google',
  GITHUB = 'github',
}

export function LoginModal(props: LoginModalProps) {
  async function handleSignIn(provider: Providers) {
    await signIn(provider)
  }

  return (
    <Dialog.Root {...props}>
      <Dialog.Trigger />
      <Dialog.Portal>
        <Overlay />
        <DialogContent>
          <CloseButton>
            <X />
          </CloseButton>
          <Content>
            <Title>Faça login para deixar sua avaliação</Title>
            <Socials>
              <Button
                size="lg"
                onClick={() => {
                  handleSignIn(Providers.GOOGLE)
                }}
              >
                <FcGoogle />
                <Text size="lg" weight={'bold'}>
                  Entrar com Google
                </Text>
              </Button>
              <Button
                size="lg"
                onClick={() => {
                  handleSignIn(Providers.GITHUB)
                }}
              >
                <FaGithub />
                <Text size="lg" weight={'bold'}>
                  Entrar com Github
                </Text>
              </Button>
            </Socials>
          </Content>
        </DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
