import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ProductFavButton from '../products/ProductFavButton'

const Fav = () => {
  const [favs, setFavs] = useState([])
  
  useEffect(() => {
    setFavs(JSON.parse(localStorage.getItem("favs")) ?? [])
  }, [favs])

  return (
    <>
      <h1>Favories</h1>
      <div className="row">
        <div className="col-sm-8">
          <div className="row row-cols-sm-3 row-cols-md-4">
            {
              favs.map(item => 
                <div key={item.id} className="col-sm">
                  <div className="card p-2">
                    <Link to={`/products/product/${item.id}`}><img height={"300px"} width={"300px"} src={item.image} className="card-img-top px-3" alt="..." /></Link>
                    <div className="card-body">
                      <h5 className="card-title">{item.title.substring(0, 20)}...</h5>
                      <p className="card-text">{item.description.substring(0, 30)}</p>
                      <p className="lead fw-bold">{`${item.price}$`}</p>
                      <ProductFavButton item={item} />
                    </div>
                  </div>
                </div>
              )
            }
          </div>
        </div>
        <div className="col-sm-4">
          <div className="list-group">
            {
              favs.map((item) => 
                <Link 
                key={item.id} 
                to={`/products/product/${item.id}`} 
                className="list-group-item list-group-item-action"
                >
                  {item.title.toUpperCase()} 
                </Link>
              )
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Fav