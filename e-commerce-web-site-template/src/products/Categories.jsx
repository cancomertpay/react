import {React, useEffect, useState} from 'react'
import { Link } from 'react-router-dom'

const Categories = () => {
  const [categories, setCategories] = useState([])
  
  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then(res => res.json())
      .then(res => setCategories(res))
  }, [])
  return (
    <>
      <h1>Categories</h1>
      <div className="list-group">
        {
          categories.map((category, index) => 
            <Link 
            key={index} 
            to={`/products/category/${category}`} 
            className="list-group-item list-group-item-action"
            >
              {category.toUpperCase()} 
            </Link>
          )
        }
      </div>
    </>
  )
}

export default Categories