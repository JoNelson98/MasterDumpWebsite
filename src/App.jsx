import { useState, useEffect } from "react"
import "./App.css"
import Headerr from "./components/Header"
import TrueHero from "./components/Truehero"
import { MantineProvider, ColorSchemeProvider } from "@mantine/core"
import { testdata } from "./assets/testdata"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Gallery from "./components/Gallery"
import { Routes, Route, Link, Outlet } from "react-router-dom"
import Booking from "./components/Booking"

function App() {
  const storage = typeof window !== "undefined" ? localStorage.theme : "light"
  const [colorScheme, setColorScheme] = useState(storage)
  const toggleColorScheme = (color) => {
    setColorScheme(color || (colorScheme === "dark" ? "light" : "dark"))
  }
  useEffect(() => {
    localStorage.setItem("theme", colorScheme)
    setColorScheme(colorScheme)
  }, [colorScheme])

  const Main = () => (
    <>
      <TrueHero />
      <Gallery />
      <Contact />
    </>
  )

  return (
    <div className="App" style={{ backgroundColor: colorScheme === "dark" ? "#282A3A" : "white" }}>
      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider theme={{ colorScheme }}>
          {/*  */}
          <Routes>
            <Route
              path="/MasterDumpWebsite"
              element={<Headerr links={testdata} style={{ marginBottom: 0 }} />}
            >
              <Route index element={<Main />} />
              <Route path=":Booking" element={<Booking />} />
              <Route index element={<Footer />} />
            </Route>
          </Routes>

          {/*  */}
        </MantineProvider>
      </ColorSchemeProvider>
    </div>
  )
}

export default App
