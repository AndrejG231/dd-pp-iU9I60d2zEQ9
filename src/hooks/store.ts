import { useSelector } from "react-redux"
import { State } from "../store/store"

/**
 * Selector for cart counts from redux store
 * @returns cartsReducer.state.counts
 */
export const useCartContent = () => {
  return useSelector((state: State) => state.cart.counts)
}
