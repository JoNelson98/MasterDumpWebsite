import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"
import { CounterCtxProvider } from "./contexts/Counter.ctx"
import { BrowserRouter } from "react-router-dom"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <CounterCtxProvider>
        <App />
      </CounterCtxProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
