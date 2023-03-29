import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"
import { CounterCtxProvider } from "./contexts/Counter.ctx"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CounterCtxProvider>
      <App />
    </CounterCtxProvider>
  </React.StrictMode>,
)
