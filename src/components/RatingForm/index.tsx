import { Check, X } from 'phosphor-react'
import { Avatar } from '../Avatar'
import { Text } from '../Text'
import { TextArea } from '../TextArea'
import { Container, Content, Footer, FormButton, Header } from './styles'
import { User } from 'next-auth'
import { Rating } from '../Rating'
import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { api } from '@/lib/axios'

interface RatingFormProps {
  user: User
  onClose: () => void
  book_id: string
}

const RatingFormSchema = z.object({
  description: z.string().min(1).max(450),
  rate: z.number().min(1).max(5),
})

type RatingFormSchema = z.infer<typeof RatingFormSchema>

export function RatingForm({ user, onClose, book_id }: RatingFormProps) {
  const { register, handleSubmit, control } = useForm<RatingFormSchema>({
    resolver: zodResolver(RatingFormSchema),
  })

  async function onSubmit(data: RatingFormSchema) {
    const { description, rate } = data
    await api.post('/ratings', {
      user_id: user.id,
      description,
      rate,
      book_id,
    })
    onClose()
  }

  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      <Header>
        <div>
          <Avatar size="md" src={user.avatar_url} alt="" />
        </div>
        <div>
          <Text size="md" weight={'bold'}>
            {user.name}
          </Text>
        </div>
        <div>
          <Controller
            name="rate"
            control={control}
            render={({ field }) => (
              <Rating
                size={'lg'}
                selectable
                rate={field.value}
                onSelectChange={(rate) => field.onChange(rate)}
              />
            )}
          />
        </div>
      </Header>
      <Content>
        <TextArea
          placeholder="Escreva sua avaliação"
          maxLength={450}
          {...register('description')}
        />
      </Content>
      <Footer>
        <FormButton onClick={onClose}>
          <X />
        </FormButton>
        <FormButton type="submit">
          <Check />
        </FormButton>
      </Footer>
    </Container>
  )
}
