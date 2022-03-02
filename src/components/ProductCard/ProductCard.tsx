import { memo } from "react"

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
      <div>
        {name}: {price}
        <button onClick={onPlusClick}>+</button>
        {count}
        <button onClick={onMinusClick}>-</button>
      </div>
    )
  }
)

export { ProductCard }
