import { useContext } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./App.css"
import Header from "./components/Header"
import { CounterContext } from "./contexts/Counter.ctx"

function App() {
  const { counter, setCounter } = useContext(CounterContext)

  return (
    <div className="App">
      <Header />
      <h1>Master Dump LLC</h1>
      <div className="card">
        <button onClick={() => setCounter((count) => count + 1)}>count is {counter}</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </div>
  )
}

export default App
