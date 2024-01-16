import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from 'axios'

function ProductDetails() {

  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(false)
  const { id } = useParams()

  useEffect(() => {
    setLoading(true)

    const getProduct = async () => {
      const res = await axios.get(`https://fakestoreapi.com/products/${id}`)
      setProduct(res.data)
      setLoading(false)
    }
    getProduct()
  }, [])

  return (
    <div>
      { loading && <p>Loading....</p>}
      {
        product && (
          
          <div>ProductDetails { id } { product.title }</div>
        )
      }
    </div>
  )
}
export default ProductDetails