import { Link } from 'react-router-dom'
import ProductFavButton from './ProductFavButton'
import { useContext } from 'react'
import { SiteContext } from '../context/SiteContext'

const ProductCard = ({item}) => {
  const productUrl = `/products/product/${item.id}`

  const {user} = useContext(SiteContext)

  return (
    <div className='col-sm my-2'>
      <div className="card p-2">
        <Link to={productUrl}><img height={"300px"} width={"300px"} src={item.image} className="card-img-top px-3" alt="..." /></Link>
        <div className="card-body">
        <h5 className="card-title">{item.title.substring(0, 20)}...</h5>
        <p className="card-text">{item.description.substring(0, 30)}</p>
        <p className="lead fw-bold">{`${item.price}$`}</p>
        {
          user ? <ProductFavButton item={item} /> : ""
        }
        </div>
      </div>
    </div>
  )
}

export default ProductCard