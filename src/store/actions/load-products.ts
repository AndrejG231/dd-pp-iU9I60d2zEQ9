/**
 * This file contains actions related to fetching products data
 */

import { Product } from "../../types/product"
import {
  ERROR,
  ErrorAction,
  LOAD,
  LoadAction,
  SUCCESS,
  SuccessAction,
} from "../reducers/products"

/**
 * Toggle fetching state
 */
export const loadProducts = (): LoadAction => ({ type: LOAD })

/**
 * Store successfully loaded products data
 */
export const successLoadProducts = (data: Product[]): SuccessAction => ({
  type: SUCCESS,
  data,
})

/**
 * Set state to error - failed to load data
 */
export const errorLoadProducts = (): ErrorAction => ({ type: ERROR })
