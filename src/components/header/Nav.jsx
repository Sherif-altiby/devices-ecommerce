import { Link } from 'react-router-dom'
import './Header.css'

const Nav = () => {
  return (
    <div className='navbar' >
      
      <div className="container">
      <ul  className="nav_links">
        <li> <Link to="/clothes">      Clothes     </Link> </li>
        <li> <Link to="/electronics">  Electronics </Link> </li>
        <li> <Link to="/furniture">    Furniture   </Link> </li>
        <li> <Link to="/shose">        Shoses      </Link> </li>
        <li> <Link to="/others">       Others      </Link> </li>
      </ul>
      </div>

    </div>
  )
}

export default Nav