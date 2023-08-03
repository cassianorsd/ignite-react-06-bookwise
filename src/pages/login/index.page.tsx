import { Heading } from '@/components/Heading'
import {
  Container,
  Content,
  Hero,
  LoginContainer,
  LoginOptions,
} from './styles'
import { Text } from '@/components/Text'
import { Button } from '@/components/Button'
import { FcGoogle } from 'react-icons/fc'
import { FaGithub } from 'react-icons/fa'
import { PiRocketLaunch } from 'react-icons/pi'
import heroImg from '@/assets/hero.png'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/router'

enum Providers {
  GOOGLE = 'google',
  GITHUB = 'github',
}

export default function Login() {
  const router = useRouter()

  async function handleSignIn(provider: Providers) {
    await signIn(provider)
    await router.push('/')
  }

  return (
    <Container>
      <Hero src={heroImg} alt="" />
      <Content>
        <LoginContainer>
          <div>
            <Heading size="md">Boas vindas!</Heading>
            <Text>Faça seu login ou acesse como visitante.</Text>
          </div>
          <LoginOptions>
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
            <Button size="lg">
              <PiRocketLaunch
                style={{
                  color: '#8381D9',
                }}
              />
              <Text size="lg" weight={'bold'}>
                Entrar como visitante
              </Text>
            </Button>
          </LoginOptions>
        </LoginContainer>
      </Content>
    </Container>
  )
}
