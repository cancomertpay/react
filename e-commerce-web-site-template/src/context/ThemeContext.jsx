import { createContext, useEffect, useState } from "react";


const ThemeContext = createContext();

function ThemeContextProvider({children}) {
  const [themeName, setThemeName] = useState('light')

  const handleClick = () => {
    setThemeName(prev => {
      const themeInfo = prev === 'light' ? 'dark' : 'light'
      changeTheme(themeInfo)
      localStorage.setItem('theme', themeInfo)
      return themeInfo
    })
  }

  const changeTheme = (theme) => {
    document.documentElement.setAttribute('data-bs-theme', theme)
  }

  const getPrefferedTheme = () => {
    const storedTheme = localStorage.getItem('theme')
    if(storedTheme) {
      return storedTheme
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }

  useEffect(() => {
    setThemeName(getPrefferedTheme())
    changeTheme(getPrefferedTheme())
  }, [])

  return (
    <ThemeContext.Provider value={{themeName, handleClick}}>
      {children}
    </ThemeContext.Provider>
  )
}

export {
  ThemeContext,
  ThemeContextProvider
}