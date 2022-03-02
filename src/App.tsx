import { BrowserRouter } from "react-router-dom"
import { GlobalStyle } from "./core/GlobalStyle"
import { Routes } from "./core/Routes"

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </>
  )
}

export default App
