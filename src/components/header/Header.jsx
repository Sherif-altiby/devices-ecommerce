
import { Link } from "react-router-dom";
import "./Header.css";
import { useProvider } from "../context/MainContext";


const Header = () => {

 const { selectedItems  } = useProvider()

  return (
    <div className="header">
      <div className="container">
        <div className="header_content">
        <Link to="/" >   <h1 className="header_title">
            Shopping<span>Hub.</span>
          </h1> </Link>

        <Link to='/cart' >   <div className="header_cart">
          <i className="fa-solid fa-cart-shopping"></i> 
          <h4>Cart</h4><span> {selectedItems} </span>
          </div>  </Link> 

        </div>
      </div>
    </div>
  );
};

export default Header;
