import './Cart.css'
import { useProvider } from "../context/MainContext";

const CartItem = ({item}) => {
 
  const {  increasCartCount, dcreasCartCount , removeItem } = useProvider()

  return (
    <div className='cart_item' >
       
       <div className="cart_item_info">
        <img src={item.img} alt="" />
        <div className="info">
          <h3> {item.description } </h3>
          <div className="quantity">
            <span className="qty"> Qty:</span> <span onClick={()=>dcreasCartCount(item)} className="btn"> - </span>
            <span className="mount"> {item.count >= 0 ? item.count : removeItem(item)} </span>
             <span onClick={()=> increasCartCount(item)}
             className="btn"> + </span>
          </div>
          <p className="sallary">Price:  ${item.sallary} </p>
        </div>
       </div>
       <div onClick={()=> removeItem(item)} className="remove_item">
       <i className="fa-solid fa-trash"></i>
       </div>
       <div className="sub_total">
        <h2> Sub Total : ${ (item.count * item.sallary).toFixed(2)  } </h2>
       </div>
    </div>
  )
}

export default CartItem