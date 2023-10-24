import { Link } from 'react-router-dom'
import './ProductNav.css'

const ProductNav = ({product}) => {
  return (
    <div className='product_nav ' >
      <div className="container">
        <div className="product_nav_container">
        <Link to="/" > <i className="fa-solid fa-house"></i></Link>
      <i className="fa-solid fa-chevron-right"></i>
      <h3> Category </h3>
      <i className="fa-solid fa-chevron-right"></i>
      <h4>  {product} </h4>
        </div>
      </div>
    </div>
  )
}

export default ProductNav