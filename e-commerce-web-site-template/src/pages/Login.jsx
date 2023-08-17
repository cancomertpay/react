import React, { useContext } from 'react'
import { SiteContext } from '../context/SiteContext'

const Login = () => {
  const {handleLogin} = useContext(SiteContext)
  return (
    <>
      <h1>Login</h1>
      <button onClick={handleLogin}>Login</button>
    </>
  )
}

export default Login