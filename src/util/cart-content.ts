import { ProductsMap } from "../types/product"

/**
 * Parses product list and shopping cart counts into table values
 */
type ParseCartContent = {
  (products: ProductsMap, cartContent: Record<number, number>): {
    total: number
    items: { id: string; name: string; amount: number; price: number }[]
  }
}

export const parseCartContent: ParseCartContent = (products, cartContent) => {
  let total = 0

  const items = Object.entries(cartContent).map(([id, amount]) => {
    const name = products[+id].name
    const price = products[+id].price * amount

    total += price

    return {
      id,
      name,
      price,
      amount,
    }
  })

  return { total, items }
}
