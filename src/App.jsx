import { useState, useEffect } from "react"
import "./App.css"
import Headerr from "./components/Header"
import TrueHero from "./components/Truehero"
import { MantineProvider, ColorSchemeProvider } from "@mantine/core"
import { testdata } from "./assets/testdata"
import Contact from "./components/Contact"
import useLocalStorage from "./hooks/useLocalStorage"

function App() {
  const storage = typeof window !== "undefined" ? localStorage.theme : "light"
  const [colorScheme, setColorScheme] = useState(storage)
  const toggleColorScheme = (color) => {
    setColorScheme(color || (colorScheme === "dark" ? "light" : "dark"))
  }
  // useEffect(() => {
  //   localStorage.setItem("theme", colorScheme)
  //   setColorScheme(colorScheme)
  // }, [colorScheme])
  useLocalStorage(colorScheme, "theme")

  return (
    <div className="App" style={{ backgroundColor: colorScheme === "dark" ? "#282A3A" : "white" }}>
      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider theme={{ colorScheme }}>
          <Headerr links={testdata} style={{ marginBottom: 0 }} />
          <TrueHero />
          <Contact />
        </MantineProvider>
      </ColorSchemeProvider>
    </div>
  )
}

export default App
