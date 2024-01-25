import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import axios from 'axios'


function ProductDetailsPage() {

  const { productId } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true)
      try {
        const res = await axios.get(`https://js2-ecommerce-api.vercel.app/api/products/${productId}`)

        setProduct(res.data)
        setLoading(false)
        
      } catch (err) {
        setError('Something went wrong!')
        console.error(err.message)
      }
    }

    getProduct()
  }, [])


  return (
    <div>
      {product?.name}
    </div>
  )
}
export default ProductDetailsPage