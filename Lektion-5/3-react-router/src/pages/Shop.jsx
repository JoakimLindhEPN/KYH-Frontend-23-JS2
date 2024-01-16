import { useEffect, useState } from "react"
import axios from 'axios'
import { Product } from "../components/Product"

function Shop() {
  const [products, setProducts] = useState([])

  useEffect(() => {

    const getProducts = async () => {
      const res = await axios.get('https://fakestoreapi.com/products')
      setProducts(res.data)
    }
    getProducts()
  }, [])


  return (
    <div className="shop">
      {
        products.map(product => (
          <Product key={product.id} product={product} />
        ))
      }
    </div>
  )
}
export default Shop