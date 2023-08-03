import { DefaultPageLayout } from '@/layouts/DefaultPageLayout'
import { prisma } from '@/lib/prisma'
import { GetServerSideProps } from 'next'
import { ProfileRatings } from './ProfileRatings'
import { ProfileInfo } from './ProfileInfo'
import { Container, PageContent } from './styles'
import { Heading } from '@/components/Heading'
import { User } from 'phosphor-react'

interface ProfileProps {
  user: {
    name: string
    avatar_url: string
    created_at: string
    stats: {
      books_read: number
      total_pages: number
      total_authors: number
      popular_category: string
    }
  }
}

export default function Profile({ user }: ProfileProps) {
  return (
    <DefaultPageLayout>
      <Container>
        <Heading size="2xl">
          <User />
          Perfil
        </Heading>
        <PageContent>
          <ProfileRatings />
          <ProfileInfo user={user} />
        </PageContent>
      </Container>
    </DefaultPageLayout>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const user_id = String(params?.user_id)

  const user = await prisma.user.findUnique({
    where: {
      id: user_id,
    },
    include: {
      ratings: {
        include: {
          book: true,
        },
      },
    },
  })

  if (!user) {
    return {
      notFound: true,
    }
  }

  const userBooks = await prisma.book.findMany({
    where: {
      ratings: {
        some: {
          user_id,
        },
      },
    },
    include: {
      ratings: true,
      categories: {
        include: {
          category: true,
        },
      },
    },
  })

  const books_read = userBooks.length
  const total_pages = userBooks.reduce((acc: number, book) => {
    return acc + book.total_pages
  }, 0)

  const authors = userBooks.map((book) => book.author)
  const total_authors = authors.filter(
    (author, index) => authors.indexOf(author) === index,
  ).length

  // // get most read category
  // const categories = userBooks
  //   .map((book) => {
  //     return book.categories.map((c) => c.category.name)
  //   })
  //   .flat()

  const rawPopularCategory: {
    category: string
    count: number
  }[] = await prisma.$queryRaw`
    select 
      c.name as category, count(c.name) as count
    from users u
    join ratings r on r.user_id = u.id
    join books b on b.id = r.book_id
    join CategoriesOnBooks cb on cb.book_id = b.id
    join categories c on c.id = cb.categoryId
    where u.id = ${user_id}
    group by c.name
    order by count(c.name) desc
    limit 1
  `

  let popular_category = 'Nenhuma'

  if (rawPopularCategory[0]) {
    popular_category = rawPopularCategory[0].category
  }

  // const most_read_category = categories.reduce(
  //   (acc: { [category: string]: number }, category) => {
  //     if (!acc[category]) {
  //       acc[category] = 1
  //     } else {
  //       acc[category] += 1
  //     }
  //     return acc
  //   },
  //   {},
  // )

  // const popular_category = Object.keys(most_read_category).reduce((a, b) =>
  //   most_read_category[a] > most_read_category[b] ? a : b,
  // )

  return {
    props: {
      user: {
        id: user.id,
        name: user.name,
        created_at: user.created_at.toISOString(),
        avatar_url: user.avatar_url,
        stats: {
          books_read,
          total_pages,
          total_authors,
          popular_category,
        },
      },
    },
  }
}
