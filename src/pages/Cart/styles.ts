import styled from "styled-components"

export const Wrapper = styled.main`
  width: 800px;
  margin: auto;
  margin-top: 43px;
  background: ${({ theme }) => theme.colors.grayDarkest};
  border-radius: 14px;
  padding: 20px;
  margin-bottom: 150px;
  @media screen and (max-width: 850px) {
    padding-top: 50px;
    margin: 0;
    width: 100%;
    border-radius: 0;
    background: ${({ theme }) => theme.colors.grayDark};
  }
`

export const Table = styled.table`
  width: 100%;
`

export const TableRow = styled.tr`
  display: grid;
  height: 90px;
  grid-template:
    "title title" 1.2fr
    "count total" 1fr
    /1fr 1fr;
  gap: 10px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.gray};
  @media screen and (min-width: 850px) {
    height: 40px;
    grid-template:
      "title count total" 1.2fr
      /5fr 1fr 1fr;
  }
`

export const TableHeadRow = styled(TableRow)`
  display: none;
  @media screen and (min-width: 850px) {
    display: grid;
    border-bottom: none;
    margin-bottom: 5px;
  }
`

export const TableFootRow = styled.tr`
  border-bottom: none;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 10px;
  padding-right: 20px;
`

export const TableTotal = styled.td`
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.6rem;
`

export const TableTotalVal = styled.td`
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.9rem;
  margin: 0 20px;
  font-weight: 700;
  &:before {
    content: "$";
  }
`

export const TableHead = styled.th`
  border-radius: 12px;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.grayDark};
  font-size: 1.6rem;
  padding: 0 10px;
  line-height: 40px;
`

export const TableVal = styled.td`
  font-size: 1.3rem;
  color: ${({ theme }) => theme.colors.white};
  line-height: 40px;
  text-align: center;
  grid-area: count;

  &:nth-child(1) {
    text-align: left;
    padding-left: 10px;
    grid-area: title;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: elipsis;
    @media screen and (max-width: 850px) {
      font-size: 1.4rem;
      font-weight: 600;
    }
  }

  &:nth-child(2) {
    &:after {
      content: "x";
    }
  }

  &:nth-child(3) {
    text-align: right;
    padding-right: 10px;
    grid-area: total;
    &:before {
      content: "$";
    }
  }
`

export const ShopButton = styled.div`
  width: 250px;
  background: ${({ theme }) => theme.colors.grayDarkest};
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.4rem;
  padding: 15px 0;
  margin: auto;
  margin-top: 10px;
  text-align: center;
  border-radius: 12px;
  cursor: pointer;
  @media screen and (min-width: 850px) {
    background: ${({ theme }) => theme.colors.grayDark};
  }
  &:hover {
    background: ${({ theme }) => theme.colors.gray};
  }
`
