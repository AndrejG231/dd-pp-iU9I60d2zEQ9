import { ChangeEventHandler, useCallback, useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { useProductsData } from "../../api/products-data"
import Fallback from "../../components/Fallback"
import { ProductCard } from "../../components/ProductCard"
import { useCartContent } from "../../hooks/store"
import { addToCart, removeFromCart } from "../../store/actions/manage-cart"
import { Items, SearchBox, SearchIcon, SearchInput } from "./styles"

const List = () => {
  const dispatch = useDispatch()

  const { products, loading, error } = useProductsData()
  const cartContent = useCartContent()

  // Cart actions
  const increaseInCart = useCallback(
    (id: number) => dispatch(addToCart(id)),
    [dispatch]
  )
  const decreaseInCart = useCallback(
    (id: number) => dispatch(removeFromCart(id)),
    [dispatch]
  )

  // Search string
  const [searchStr, setSearchStr] = useState("")

  const handleSearch = useCallback<ChangeEventHandler<HTMLInputElement>>(
    ({ target: { value } }) => setSearchStr(value),
    [setSearchStr]
  )

  return (
    // Do not render without loaded data
    <Fallback loading={loading} error={error}>
      <SearchBox>
        <SearchIcon />
        <SearchInput
          placeholder="Search"
          type="text"
          value={searchStr}
          onChange={handleSearch}
        />
      </SearchBox>
      <Items>
        {Object.values(products).map(({ id, name, price }) => {
          // Filter out unmatched
          if (!name.includes(searchStr)) return null
          return (
            <ProductCard
              key={id}
              name={name}
              price={price}
              count={~~cartContent[id]}
              onPlusClick={() => increaseInCart(id)}
              onMinusClick={() => decreaseInCart(id)}
            />
          )
        })}
      </Items>
    </Fallback>
  )
}

export { List }
