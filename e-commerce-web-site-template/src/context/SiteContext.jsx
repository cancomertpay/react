import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const SiteContext = createContext()

const SiteContextProvider = ({children}) => {
  const [user, setUser] = useState(null)

  const navigate = useNavigate()


  useEffect(() => {
    setUser(localStorage.getItem("user") ?? null)
  }, [])

  const handleLogin = () => {
    const user = {id: 1, name: "lorem"}
    setUser(user)
    localStorage.setItem("user", JSON.stringify(user))
    navigate('/')
  } 

  const handleLogout = () => {
    setUser(null)
    localStorage.removeItem("user")
    navigate('/')
  } 

  return <SiteContext.Provider value={{user, handleLogin, handleLogout}}>
    {children}
  </SiteContext.Provider>
}

export {SiteContext, SiteContextProvider}