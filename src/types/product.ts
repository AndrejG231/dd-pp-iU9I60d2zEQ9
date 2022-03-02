export type Product = {
  id: number
  price: number
  name: string
}

export type ProductResponse = {
  products: Product[]
}

export type ProductsMap = Record<number, Product>
