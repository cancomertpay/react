import { ProductsData } from "../data/product.data"

export default function ProductCard() {
	const redirectFunc = (id) => {
    window.location = `/detail/${id}`
  }
  return (
		<>
			{
				ProductsData
				.filter(item => item.isActive)
				.map(item => 
					(
						<article key={item.id}>
							<header><img style={{height: "300px", width: "400px"}} src={item.thumbnail} /></header>
							<h4>{item.name}</h4>
							<small className={"small"}>{item.category}</small>
							<h6>{item.price}</h6>
							<footer><button onClick={() => redirectFunc(item.id)}>Detail</button> </footer>
						</article>
					)
				)
			}
		</>
	)
}