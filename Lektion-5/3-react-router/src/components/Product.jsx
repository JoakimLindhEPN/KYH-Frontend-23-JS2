import { Link } from "react-router-dom"

export const Product = ({ product }) => {
  return (
    <Link to={`/details/${product.id}`} className="product">
      <div className="image-container">
        <img src={product.image} alt={product.title} />
      </div>
      <p>{ product.title }</p>
    </Link>
  )
}