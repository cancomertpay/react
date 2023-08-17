import  { React, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductCard from './ProductCard'

const Category = () => {
  const {categoryName} = useParams()
  const [categoryProducts, setcategoryProducts] = useState([])

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${categoryName}`)
      .then(res => res.json())
      .then(res => setcategoryProducts(res))
      .catch(err => console.log(err))
  }, [categoryName])

  return (
    <>
      <h1>Category: {categoryName.toUpperCase()}</h1>
      <div className="row row-cols-sm-3 row-cols-md-4">
        {
          categoryProducts.map(
            item => <ProductCard item={item} key={item.id} />)
        }
      </div>
    </>
  )
}

export default Category