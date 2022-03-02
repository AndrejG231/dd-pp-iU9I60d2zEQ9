/**
 * Handle fetching of products data
 */

import { useCallback, useLayoutEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  errorLoadProducts,
  loadProducts,
  successLoadProducts,
} from "../store/actions/load-products"
import { State } from "../store/store"
import axios from "axios"
import { ProductResponse } from "../types/product"

// Currently there is not api present, so fetch mock data from public
const URL = process.env.PUBLIC_URL + "/data.json"

/**
 * Custom hook, that provides product data in multiple places over the app, while fetching only once
 */
const useProductsData = () => {
  const { loading, error, products } = useSelector(
    (state: State) => state.products
  )

  const dispatch = useDispatch()

  const fetchProductData = useCallback(async () => {
    // loading => true
    dispatch(loadProducts())
    try {
      const response = await axios.get<ProductResponse>(URL)

      // Invalid data - error => true
      if (!response.data.products) dispatch(errorLoadProducts())

      return dispatch(successLoadProducts(response.data.products))

      // Caught error - error => true
    } catch (err) {
      dispatch(errorLoadProducts())
    }
  }, [dispatch])

  // Fetch data, if not loaded
  // instantly display loading on screen
  useLayoutEffect(() => {
    // dont fetch if already fetching, error, or data is loaded
    if (loading || error || Object.keys(products).length > 0) return

    fetchProductData()
  }, [fetchProductData, loading, error, products, dispatch])

  return { loading, error, products }
}

export { useProductsData }
