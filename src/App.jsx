import { useContext, useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./App.css"
import Headerr from "./components/Header"
import { CounterContext } from "./contexts/Counter.ctx"
import Hero from "./components/Hero"
import { MantineProvider, ColorSchemeProvider } from "@mantine/core"
import { testdata } from "./assets/testdata"

function App() {
  const { counter, setCounter } = useContext(CounterContext)
  const [colorScheme, setColorScheme] = useState("light")
  const toggleColorScheme = (color) => {
    setColorScheme(color || (colorScheme === "dark" ? "light" : "dark"))
  }

  return (
    <div className="App">
      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider theme={{ colorScheme }}>
          <Headerr links={testdata} style={{ marginBottom: 0 }} />
          <Hero />
        </MantineProvider>
      </ColorSchemeProvider>
    </div>
  )
}

export default App
