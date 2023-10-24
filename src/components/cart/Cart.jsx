import { Link } from 'react-router-dom'
import './Cart.css'
import { useProvider } from '../context/MainContext'
import CartItem from './CartItem'

const Cart = () => {

  const { allItems , removeAll ,   selectedItems, getAllsallary,} =useProvider()

  return (
    <div className='cart' >

<div className="nav_cart">
  <div className="container">
  <Link to="/" > <i className="fa-solid fa-house"></i></Link>
    <i className="fa-solid fa-chevron-right"></i>
    <h4> Cart </h4>
  </div>
    </div>

      <div className="container">
        <div className="cart_content">
             <h2 className='my_cart' > my cart </h2>

         <div className="cart_items_container">
           
           <div className="all_items">
             { allItems.map((item)=> <CartItem item={item} key={item.id} />) }
           </div>
          
          <div className="order_summary">
            <h2> Order Summary </h2>
            <div className="item_selected_info">
              <div className="flex"> <p> Selected {selectedItems} item(s) Price </p>  <span> ${getAllsallary} </span> </div>
              <div className="flex"> <p> Discount </p>  <span> -$0.00 </span> </div>
              <div className="flex"> <p> Delivery Coast </p>  <span> + $10 </span> </div>
            </div>
            <div className="flex"> <p className='total' > Grand Total </p>  <span>  ${ +getAllsallary === 0 ? getAllsallary : +getAllsallary + 10 } </span> </div>
            <div className="checkout_btn">
              Proceed To Checkout
            </div>
          </div>


         </div>
    
    {  allItems.length > 0 ? <div onClick={()=> removeAll()} className='clear_cart' > Clear Cart </div> : null }
        </div>
      </div>
    </div>
  )
}

export default Cart