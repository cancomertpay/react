import {React} from 'react'
import {Products} from '../products/'


const Home = () => {
  return (
    <>
      <div id="carouselExample" className="carousel slide">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img height={"300px"} src="https://picsum.photos/id/1/900/300" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img height={"300px"} src="https://picsum.photos/id/2/900/300" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img height={"300px"} src="https://picsum.photos/id/3/900/300" className="d-block w-100" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
      </div>
      <Products />
    </>
  )
}

export default Home