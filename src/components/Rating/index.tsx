import { Star } from 'phosphor-react'
import { Container, HalfStar } from './styles'
import { ComponentProps } from '@stitches/react'
import { MouseEvent, useEffect, useState } from 'react'

interface RatingProps extends ComponentProps<typeof Container> {
  rate?: number
  maxRate?: number
  onSelectChange?: (rate: number) => void
}

export function Rating({
  rate = 0,
  maxRate = 5,
  size = 'sm',
  selectable,
  onSelectChange,
}: RatingProps) {
  const [selectedRate, setSelectedRate] = useState(rate)

  const starts = Array.from({ length: maxRate }, (_, index) => {
    let fill = 'empty'

    if (selectedRate >= index + 1) {
      fill = 'full'
    } else if (selectedRate >= index + 0.5) {
      fill = 'half'
    }

    return {
      id: index,
      fill,
    }
  })

  function handleStarClick(e: MouseEvent<HTMLButtonElement>, rate: number) {
    e.preventDefault()
    setSelectedRate(rate)
  }

  useEffect(() => {
    if (onSelectChange) {
      onSelectChange(selectedRate)
    }
  }, [selectedRate, onSelectChange])

  if (selectable) {
    return (
      <Container size={size} selectable={selectable}>
        {starts.map((star, index) => (
          <div key={star.id}>
            <HalfStar onClick={(e) => handleStarClick(e, index + 0.5)}>
              <Star
                size={24}
                weight={
                  star.fill === 'full' || star.fill === 'half'
                    ? 'fill'
                    : 'regular'
                }
              />
            </HalfStar>
            <HalfStar secondHalf onClick={(e) => handleStarClick(e, index + 1)}>
              <Star
                size={24}
                weight={star.fill === 'full' ? 'fill' : 'regular'}
              />
            </HalfStar>
          </div>
        ))}
      </Container>
    )
  }
  return (
    <Container size={size}>
      {starts.map((star) => (
        <div key={star.id}>
          <HalfStar>
            <Star
              size={24}
              weight={
                star.fill === 'full' || star.fill === 'half'
                  ? 'fill'
                  : 'regular'
              }
            />
          </HalfStar>
          <HalfStar secondHalf>
            <Star
              size={24}
              weight={star.fill === 'full' ? 'fill' : 'regular'}
            />
          </HalfStar>
        </div>
      ))}
    </Container>
  )
}
