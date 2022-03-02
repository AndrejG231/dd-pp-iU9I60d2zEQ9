import { Cart } from "../pages/Cart"
import { List } from "../pages/List"
import { Routes as RoutesWrapper, Route } from "react-router-dom"

const Routes = () => {
  return (
    <RoutesWrapper>
      <Route path="/" element={<List />} />
      <Route path="/cart" element={<Cart />} />
    </RoutesWrapper>
  )
}

export { Routes }
