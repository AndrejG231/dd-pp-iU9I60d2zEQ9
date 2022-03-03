import styled from "styled-components"
import { Search } from "@styled-icons/heroicons-solid"

export const SearchBox = styled.div`
  width: 160px;
  height: 28px;
  position: relative;
  margin: 12px 20px 0 auto;
`

export const SearchIcon = styled(Search)`
  width: 22px;
  position: absolute;
  left: 4px;
  top: 50%;
  transform: translateY(-50%);
  color: ${({ theme }) => theme.colors.grayDark};
`

export const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  padding-left: 30px;
  border-radius: 8px;
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.grayDark};
  font-weight: 500;
`

export const Items = styled.div`
  display: grid;
  gap: 15px;
  margin: 15px auto;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  width: 1245px;
`
