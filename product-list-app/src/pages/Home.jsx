import { useState } from 'react'
import Navbar from '../components/Navbar'
import ProductCard from '../components/ProductCard'
import SimpleSlider from '../components/Slider'


function Home() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className={"container"}>
        <Navbar />
        <SimpleSlider />
        <div className="grid">
          <ProductCard />
        </div>
      </div>
    </>
  )
}

export default Home
