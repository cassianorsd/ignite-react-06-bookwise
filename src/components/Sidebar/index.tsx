import Image from 'next/image'
import { Container, Links, LogoContainer, ProfileContainer } from './styles'
import logo from '../../assets/logo.svg'
import { Text } from '../Text'
import { Binoculars, ChartLineUp, SignIn, SignOut, User } from 'phosphor-react'
import { useRouter } from 'next/router'
import { NavLink } from '../NavLink'
import { ActionLink } from '../ActionLink'
import { signOut, useSession } from 'next-auth/react'
import { Avatar } from '../Avatar'
import { Button } from '../Button'

export function Sidebar() {
  const router = useRouter()
  const session = useSession()

  const { pathname } = router

  const userFirstname = session.data?.user?.name?.split(' ')[0]

  return (
    <Container>
      <LogoContainer>
        <Image src={logo} alt="" />
        <Text weight={'bold'} size={'xl'}>
          BookWise
        </Text>
      </LogoContainer>
      <Links>
        <NavLink href="/" active={pathname === '/'}>
          <ChartLineUp />
          Início
        </NavLink>
        <NavLink href="/explore" active={pathname === '/explore'}>
          <Binoculars />
          Explorar
        </NavLink>
        {session.status === 'authenticated' && (
          <NavLink
            href={`/profile/${session.data.user.id}`}
            active={pathname === `/profile/[user_id]`}
          >
            <User />
            Perfil
          </NavLink>
        )}
      </Links>
      {session.status !== 'authenticated' && (
        <ActionLink href="/login" variant={'white'} size={'md'}>
          Fazer login
          <SignIn style={{ color: '#50B2C0' }} />
        </ActionLink>
      )}
      {session.status === 'authenticated' && (
        <ProfileContainer>
          <Avatar src={session.data?.user?.avatar_url} />
          {userFirstname}
          <Button
            variant={'tertiary'}
            onClick={() => {
              signOut()
            }}
          >
            <SignOut style={{ color: '#F75A68' }} />
          </Button>
        </ProfileContainer>
      )}
    </Container>
  )
}
