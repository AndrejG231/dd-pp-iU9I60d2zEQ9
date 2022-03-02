import { ProductResponse, ProductsMap } from "../../types/product"

/**
 * Products reducer
 * Holds cached products data
 * Used for fetching app data used in multiple places
 */

export type ProductsState = {
  loading: boolean
  error: boolean
  products: ProductsMap
}
const defaultState: ProductsState = {
  loading: false,
  error: false,
  products: {},
}

/**
 * Action types, constants
 */
export const LOAD = "load-products" as const
export const SUCCESS = "save-loaded-products" as const
export const ERROR = "load-products" as const

export type LoadAction = {
  type: typeof LOAD
}
export type SuccessAction = {
  type: typeof SUCCESS
  data: ProductResponse
}
export type ErrorAction = {
  type: typeof ERROR
}
export type Action = LoadAction | SuccessAction | ErrorAction

/**
 *  Reducer
 */

const productsReducer = (
  state: ProductsState = defaultState,
  action: Action
): ProductsState => {
  switch (action.type) {
    case LOAD:
      return { ...state, loading: true }
    case SUCCESS:
      // Map data to { id: product } object
      const products = action.data.products.reduce(
        (acc, val) => ({
          ...acc,
          [val.id]: val,
        }),
        {} as ProductsMap
      )

      // store data
      return { ...state, loading: false, products }
    case ERROR:
      return { ...state, loading: false, error: true }
    default:
      return state
  }
}

export { productsReducer }
