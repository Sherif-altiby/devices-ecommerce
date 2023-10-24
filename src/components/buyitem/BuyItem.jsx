import "./BuyItem.css";
import { useProvider } from "../context/MainContext";

const BuyItem = () => {
  
  const {showBuy,setShowBuy , currentItem , decreaseQuantity , increaseQuantity , addItemToAllItems } =useProvider()


  const clickHandler =()=>{
    addItemToAllItems(currentItem);
    setShowBuy(false)
  }

  return (
    <div
      className={showBuy ? "buy_item_container block" : "buy_item_container"}
    >
      <div onClick={() => setShowBuy(false)} className="over_lay"></div>
      <div className="buy_item">
        <img src={currentItem.img} alt="" />
        <div className="info">
          <h4> {currentItem.description} </h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            sapiente sunt minima quaerat voluptates esse vel nulla magnam non
            quae.
          </p>
          <h2> Price : ${currentItem.sallary} </h2>

          <div className="quantity">
            <p>Qty</p> :
            <span onClick={()=> decreaseQuantity(currentItem)}   >
              - </span>
            <span> {currentItem.count >= 1 ? currentItem.count :   setShowBuy(false) } </span>
            <span onClick={()=> increaseQuantity(currentItem)} >
              + </span>
          </div>
          <div onClick={()=> clickHandler()} className="btn_add">
            <i className="fa-solid fa-cart-shopping"></i>
            <span  > Add To Cart </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyItem;
