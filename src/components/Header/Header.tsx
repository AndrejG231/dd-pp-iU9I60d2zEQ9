import { useNavigate } from "react-router-dom"
import { CartButton, CartIcon, CartText, Title, Navbar } from "./styles"

const Header = () => {
  const navigate = useNavigate()

  return (
    <header>
      <Navbar>
        <Title onClick={() => navigate("/")}>Grocery Store</Title>
        <CartButton onClick={() => navigate("/cart")}>
          <CartText>Shopping Cart</CartText>
          <CartIcon />
        </CartButton>
      </Navbar>
    </header>
  )
}

export { Header }
