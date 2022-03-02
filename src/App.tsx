import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import { GlobalStyle } from "./core/GlobalStyle"
import { Routes } from "./core/Routes"
import { store } from "./store/store"

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Provider>
  )
}

export default App
