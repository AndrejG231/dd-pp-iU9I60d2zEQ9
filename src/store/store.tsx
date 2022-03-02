import { combineReducers, createStore } from "redux"
import { productsReducer } from "./reducers/products"
import { cartReducer } from "./reducers/shoppingCart"

const reducers = {
  products: productsReducer,
  cart: cartReducer,
}

// type definition for store state
export type State = {
  [K in keyof typeof reducers]: ReturnType<typeof reducers[K]>
}

const store = createStore(combineReducers(reducers))

export { store }
