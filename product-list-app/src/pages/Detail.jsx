import { useParams} from "react-router-dom";
import Navbar from "../components/Navbar";
import {useEffect, useState} from 'react'
import { ProductsData } from "../data/product.data";


export default function Detail() {
  const {id} = useParams()
  const [data, setData] = useState([])

  useEffect(() => {
    setData(ProductsData)
  }, [id])

  return (
    <div className={"container"}>
      <Navbar />
      {
        data
          .filter(item => item.id == id)
          .map(item => 
            (
              <div key={item.id}>
                <article>
                  <hgroup>
                    <h3>{item.name}</h3>
                    <h4>{item.category}</h4>
                  </hgroup>
                </article>
                <article>
                  <header className={"grid"}>
                    <img src={item.thumbnail} />
                    <img src={item.imgUrl} />
                  </header>

                  <footer className={"grid"}>
                    <button>{item.price} Add to Card</button>
                    <button className={"contrast"} onClick={() => {
                      window.location = "/"
                    }}>Back</button>
                  </footer>
                </article>
              </div>
            )
          )
      }
    </div>
  )
}