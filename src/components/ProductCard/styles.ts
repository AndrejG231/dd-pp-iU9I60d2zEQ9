import styled from "styled-components"

export const Card = styled.div`
  width: 290px;
  height: 160px;
  border-radius: 10px;
  position: relative;
  background: ${({ theme }) => theme.colors.grayDarkest};
`

export const Title = styled.h3`
  color: ${({ theme }) => theme.colors.white};
  font-size: 2rem;
  margin: 5px 10px;
  text-align: center;
`

export const Price = styled.span`
  display: block;
  text-align: right;
  margin-left: auto;
  margin-right: 35px;
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.2rem;
`

export const Buttons = styled.div`
  width: 100%;
  position: absolute;
  bottom: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Amount = styled.span`
  display: block;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.white};
  width: 80px;
  text-align: center;
`

export const Button = styled.button`
  border: none;
  outline: none;
  background: ${({ theme }) => theme.colors.grayDark};
  color: ${({ theme }) => theme.colors.white};
  padding: 4px 18px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.2rem;
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.colors.gray};
  }
`
