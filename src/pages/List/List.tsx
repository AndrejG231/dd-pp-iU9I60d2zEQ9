import { ChangeEventHandler, useCallback, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { useProductsData } from "../../api/products-data"
import Fallback from "../../components/Fallback"
import { ProductCard } from "../../components/ProductCard"
import { addToCart, removeFromCart } from "../../store/actions/manage-cart"
import { State } from "../../store/store"

const List = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { products, loading, error } = useProductsData()
  const counts = useSelector((state: State) => state.cart.counts)

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
    <div>
      <input type="text" value={searchStr} onChange={handleSearch} />
      <button onClick={() => navigate("/cart")}>Shopping Cart</button>
      {/* Display loading/error screen */}
      <Fallback loading={loading} error={error}>
        {Object.values(products).map(({ id, name, price }) => {
          // Filter out unmatched
          if (!name.includes(searchStr)) return null
          return (
            <ProductCard
              key={id}
              name={name}
              price={price}
              count={~~counts[id]}
              onPlusClick={() => increaseInCart(id)}
              onMinusClick={() => decreaseInCart(id)}
            />
          )
        })}
      </Fallback>
    </div>
  )
}

export { List }
