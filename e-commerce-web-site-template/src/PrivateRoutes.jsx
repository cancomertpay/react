import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { SiteContext } from './context/SiteContext'

const PrivateRoutes = ({children}) => {

  const {user} = useContext(SiteContext)

  if (!user?.id) {
    return <Navigate to={'/login'} replace />
  }

  return children
}

export default PrivateRoutes