import { ADD, AddAction, REMOVE, RemoveAction } from "../reducers/shoppingCart"

/**
 * Actions for managing shopping cart
 */
export const addToCart = (id: number): AddAction => ({ type: ADD, id })

export const removeFromCart = (id: number): RemoveAction => ({
  type: REMOVE,
  id,
})
