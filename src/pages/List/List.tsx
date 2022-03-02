import { useCallback, useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useProductsData } from "../../api/products-data"
import { ProductCard } from "../../components/ProductCard"
import { addToCart, removeFromCart } from "../../store/actions/manage-cart"
import { LS_KEY } from "../../store/reducers/shoppingCart"
import { State } from "../../store/store"

const List = () => {
  const { products, loading, error } = useProductsData()
  const dispatch = useDispatch()
  const counts = useSelector((state: State) => state.cart.counts)

  // Update localStorage for new counts (disabled)
  // useEffect(() => {
  //   localStorage.setItem(LS_KEY, JSON.stringify(counts))
  // }, [counts])

  // Cart actions
  const increaseInCart = useCallback(
    (id: number) => dispatch(addToCart(id)),
    [dispatch]
  )
  const decreaseInCart = useCallback(
    (id: number) => dispatch(removeFromCart(id)),
    [dispatch]
  )

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error...</div>

  return (
    <div>
      {Object.values(products).map(({ id, name, price }) => (
        <ProductCard
          key={id}
          name={name}
          price={price}
          count={~~counts[id]}
          onPlusClick={() => increaseInCart(id)}
          onMinusClick={() => decreaseInCart(id)}
        />
      ))}
    </div>
  )
}

export { List }
