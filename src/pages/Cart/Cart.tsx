/**
 * Display summary of items in shopping cart
 */

import { useNavigate } from "react-router-dom"
import { useProductsData } from "../../api/products-data"
import Fallback from "../../components/Fallback"
import { useCartContent } from "../../hooks/store"
import { parseCartContent } from "../../util/cart-content"

const Cart = () => {
  const { products, loading, error } = useProductsData()
  const cartContent = useCartContent()

  const navigate = useNavigate()

  const { total, items } = parseCartContent(products, cartContent)

  return (
    <div>
      <Fallback loading={loading} error={error}>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Amount</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {items.map(({ id, name, amount, price }) => {
              return (
                <tr key={id}>
                  <th>{name}</th>
                  <th>{amount}</th>
                  <th>{price.toFixed(2)}</th>
                </tr>
              )
            })}
          </tbody>
          <tfoot>
            <tr>
              <td></td>
              <td>Total: </td>
              <td>{total.toFixed(2)}</td>
            </tr>
          </tfoot>
        </table>
        <button onClick={() => navigate("/")}>Continue shopping.</button>
      </Fallback>
    </div>
  )
}

export { Cart }
