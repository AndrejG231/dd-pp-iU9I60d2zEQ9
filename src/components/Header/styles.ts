import styled from "styled-components"
import { ShoppingCart } from "@styled-icons/heroicons-solid/ShoppingCart"

export const Navbar = styled.nav`
  background: ${({ theme }) => theme.colors.grayDarkest};
  width: 100%;
  height: 80px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Title = styled.h1`
  font-size: 2.4rem;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  @media screen and (min-width: 560px) {
    font-size: 3rem;
  }
`

export const CartButton = styled.button`
  border: none;
  outline: none;
  background: none;
  color: ${({ theme }) => theme.colors.white};
  padding: 8px 18px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.colors.gray};
  }
  @media screen and (min-width: 560px) {
    background: ${({ theme }) => theme.colors.grayDark};
  }
`

export const CartIcon = styled(ShoppingCart)`
  position: static;
  display: block;
  width: 25px;
`

export const CartText = styled.span`
  display: none;
  white-space: nowrap;
  font-size: 1.3rem;
  @media screen and (min-width: 560px) {
    display: block;
    margin-right: 12px;
  }
`
