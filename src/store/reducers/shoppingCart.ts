/**
 * Stores information about quantity of items in shopping cart
 */

type CartState = {
  counts: Record<number, number>
}
const defaultState: CartState = {
  counts: {},
}

/**
 * Actions
 */
export const ADD = "add-to-cart" as const
export const REMOVE = "remove-from-cart" as const

export type AddAction = {
  type: typeof ADD
  id: number
}
export type RemoveAction = {
  type: typeof REMOVE
  id: number
}
export type Action = AddAction | RemoveAction

/**
 * Reducer
 */
const cartReducer = (
  state: CartState = defaultState,
  action: Action
): CartState => {
  switch (action.type) {
    case ADD:
      return {
        counts: { ...state.counts, [action.id]: ~~state.counts[action.id] + 1 },
      }
    case REMOVE:
      return {
        counts: {
          ...state.counts,
          [action.id]: Math.max(0, ~~state.counts[action.id] - 1),
        },
      }
    default:
      return state
  }
}

export { cartReducer }
