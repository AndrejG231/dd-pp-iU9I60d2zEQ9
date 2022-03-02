import { useProductsData } from "../../api/products-data"

const List = () => {
  const { products, loading, error } = useProductsData()
  return <div>{JSON.stringify(products)}</div>
}

export { List }
