import { memo } from "react"
import { Amount, Button, Buttons, Card, Price, Title } from "./styles"

interface Props {
  name: string
  price: number
  count: number // of this product in cart
  onPlusClick: () => void
  onMinusClick: () => void
}

/**
 * Product card component
 * display product info, add and remove buttons
 */

const ProductCard = memo<Props>(
  ({ name, price, count, onPlusClick, onMinusClick }) => {
    return (
      <Card>
        <Title>{name}</Title>
        <Price>${price.toFixed(2)}</Price>
        <Buttons>
          <Button onClick={onPlusClick}>+</Button>
          <Amount>{count < 10 ? "0" + count : count}</Amount>
          <Button onClick={onMinusClick}>-</Button>
        </Buttons>
      </Card>
    )
  }
)

export { ProductCard }
