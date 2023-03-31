import React, { useEffect } from "react"

export default function useLocalStorage(value, item) {
  useEffect(() => {
    localStorage.setItem(item, value)
    setColorScheme(value)
  }, [value])
}
