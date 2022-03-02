import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    background: ${({ theme }) => theme.colors.gray};
    margin: 0;
    &, * {
      box-sizing: border-box;
    }
  }
`

export { GlobalStyle }
