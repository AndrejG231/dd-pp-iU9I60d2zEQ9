import { FC } from "react"
import { Provider } from "react-redux"
import { combineReducers, createStore } from "redux"
import { productsReducer, ProductsState } from "./reducers/products"

const reducers = {
  products: productsReducer,
}

// type definition for store state
export type State = {
  [K in keyof typeof reducers]: ReturnType<typeof reducers[K]>
}

const store = createStore(combineReducers(reducers))

export { store }
