import React, { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home, About, Contact, Login, PageNotFound, Fav } from './pages'
import { Category, Product, ProductLayout, Products } from './products'
import PrivateRoutes from './PrivateRoutes'
import { SiteContext } from './context/SiteContext'

const SiteRoutes = () => {
  const {handleLogin, user} = useContext(SiteContext)

  return (
    <Routes>
      <Route path={'/'} element={<Home />} />
      <Route path={'/about'} element={<About />} />
      <Route path={'/contact'} element={<Contact />} />
      <Route path={'/products'} element={<ProductLayout />} > 
        <Route index={true} element={<Products />} />
        <Route path={'category/:categoryName'} element={<Category />} /> 
        <Route path={'product/:productId'} element={<Product />} /> 
      </Route>
      <Route path={'/login'} element={<Login />} />
      <Route path={'/fav'} element={<PrivateRoutes > <Fav /> </PrivateRoutes> } />
      
      <Route path={'*'} element={<PageNotFound />} />
    </Routes>
  )
}

export default SiteRoutes