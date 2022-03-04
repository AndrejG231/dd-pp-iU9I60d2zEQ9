/**
 * Display summary of items in shopping cart
 */

import { useNavigate } from "react-router-dom"
import { useProductsData } from "../../api/products-data"
import Fallback from "../../components/Fallback"
import { useCartContent } from "../../hooks/store"
import { parseCartContent } from "../../util/cart-content"
import {
  Table,
  TableHead,
  TableHeadRow,
  TableFootRow,
  TableRow,
  TableVal,
  Wrapper,
  TableTotal,
  TableTotalVal,
  ShopButton,
} from "./styles"

const Cart = () => {
  const { products, loading, error } = useProductsData()
  const cartContent = useCartContent()

  const navigate = useNavigate()

  const { total, items } = parseCartContent(products, cartContent)

  return (
    <Wrapper>
      <Fallback loading={loading} error={error}>
        <Table>
          <thead>
            <TableHeadRow>
              <TableHead>Name</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Total</TableHead>
            </TableHeadRow>
          </thead>
          <tbody>
            {items.map(({ id, name, amount, price }) => {
              return (
                <TableRow key={id}>
                  <TableVal>{name}</TableVal>
                  <TableVal>{amount}</TableVal>
                  <TableVal>{price.toFixed(2)}</TableVal>
                </TableRow>
              )
            })}
          </tbody>
          <tfoot>
            <TableFootRow>
              <TableTotal>Total: </TableTotal>
              <TableTotalVal>{total.toFixed(2)}</TableTotalVal>
            </TableFootRow>
          </tfoot>
        </Table>
        <ShopButton onClick={() => navigate("/")}>
          Continue shopping.
        </ShopButton>
      </Fallback>
    </Wrapper>
  )
}

export { Cart }
