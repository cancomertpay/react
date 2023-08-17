import  { React, useContext, useEffect, useState } from 'react'
import { ProductCard } from '../products'
import { SiteContext } from '../context/SiteContext'


const Products = () => {
  const [last10Products, setLast10Products] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(res => setLast10Products(res))
  }, [])

  return (
   <>
      <h1>Products</h1>
      <div className="row row-cols-sm-3 row-cols-md-4">
        {
          last10Products.map(
            item => <ProductCard item={item} key={item.id} />)
        }
      </div>
   </>
  )
}

export default Products