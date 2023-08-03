import { DefaultPageLayout } from '@/layouts/DefaultPageLayout'
import { Books, Container, PageHeader, Tags } from './styles'
import { Heading } from '@/components/Heading'
import { Binoculars } from 'phosphor-react'
import { SearchInput } from '@/components/SearchInput'
import { TagButton } from '@/components/TagButton'
import { GetStaticProps } from 'next'
import { prisma } from '@/lib/prisma'
import { api } from '@/lib/axios'
import { useQuery } from 'react-query'
import { BookCard } from './components/BookCard'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { useState } from 'react'
import { SidePanel } from '@/components/SidePanel'
import { useSession } from 'next-auth/react'

interface ExploreProps {
  categories: {
    id: string
    name: string
  }[]
}

interface Book {
  id: string
  name: string
  author: string
  cover_url: string
  rating: number
}

interface Rating {
  id: string
  description: string
  rate: number
  created_at: string
  book_id: string
  user: {
    id: string
    name: string
    avatar_url: string
  }
}

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormValues = z.infer<typeof searchFormSchema>

export default function Explore({ categories }: ExploreProps) {
  const [query, setQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [showSidePanel, setShowSidePanel] = useState(false)
  const [selectedBookId, setSelectedBookId] = useState<string | undefined>(
    undefined,
  )
  const session = useSession()

  async function fetchBooks({
    query,
    category_id,
  }: {
    query: string
    category_id: string
  }) {
    return api.get('/books', {
      params: {
        search: query,
        category_id,
      },
    })
  }

  const { data: books } = useQuery<Book[]>(
    ['books', query, selectedCategory],
    async () => {
      const response = await fetchBooks({
        query,
        category_id: selectedCategory,
      })
      return response.data.books
    },
  )

  const { data: userRatings } = useQuery<Rating[]>(
    ['ratings', session.data?.user],
    async () => {
      const response = await api.get(`/users/${session.data?.user?.id}/ratings`)
      return response.data.ratings
    },
    {
      enabled: !!session.data?.user,
      initialData: [],
    },
  )

  const { register, handleSubmit } = useForm<SearchFormValues>()

  async function handleSearch({ query }: SearchFormValues) {
    setQuery(query)
  }

  function handleSelectBook(book_id: string) {
    setSelectedBookId(book_id)
    setShowSidePanel(true)
  }

  return (
    <DefaultPageLayout>
      <Container>
        <PageHeader>
          <div>
            <Heading size="2xl">
              <Binoculars />
              Explorar
            </Heading>
            <form
              className="search-container"
              onSubmit={handleSubmit(handleSearch)}
            >
              <SearchInput
                placeholder="Buscar livro ou autor"
                {...register('query')}
              />
            </form>
          </div>
          <Tags>
            <TagButton
              selected={!selectedCategory}
              onClick={() => setSelectedCategory('')}
            >
              Tudo
            </TagButton>

            {categories.map((category) => {
              return (
                <TagButton
                  key={category.id}
                  selected={category.id === selectedCategory}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  {category.name}
                </TagButton>
              )
            })}
          </Tags>
        </PageHeader>
        <Books>
          {books &&
            books.map((book) => {
              return (
                <BookCard
                  key={book.id}
                  book={book}
                  onClick={() => handleSelectBook(book.id)}
                  alreadyRead={
                    userRatings
                      ? !!userRatings.find(
                          (rating) => rating.book_id === book.id,
                        )
                      : false
                  }
                />
              )
            })}
        </Books>
      </Container>
      <SidePanel
        open={showSidePanel}
        onOpenChange={setShowSidePanel}
        bookId={selectedBookId}
      />
    </DefaultPageLayout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const rawCategories: { id: string; name: string; count: number }[] =
    await prisma.$queryRaw`
    select 
      c.id,
      c.name,
      count(*) as count
    from categories c
    left join CategoriesOnBooks cb
    on c.id = cb.categoryId
    group by c.id
    order by count(*) desc
    limit 7
  `
  const categories = rawCategories.map((category) => ({
    id: category.id,
    name: category.name,
  }))

  return {
    props: {
      categories,
    },
  }
}
