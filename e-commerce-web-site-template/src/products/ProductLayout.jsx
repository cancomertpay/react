import React from 'react'
import {Products, Categories} from '.'
import { Outlet } from 'react-router-dom'

const ProductLayout = () => {
  return (
    <div className="row">
      <div className="col-sm-8">
        <Outlet />
      </div>
      <div className="col-sm-4">
       <Categories />
      </div>
    </div>
  )
}

export default ProductLayout