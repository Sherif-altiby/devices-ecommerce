import './Item.css'
import { useProvider } from '../context/MainContext'


const Item = ({item}) => {

  const { setCurrentItem , setShowBuy} = useProvider()
  
 const clickHandler =()=>{
  setCurrentItem({...item, count : 1});
  setShowBuy(true)
 }


  return (
  <>
      <div onClick={()=>clickHandler()}  className='item'    >
        <img src={item.img} alt="" />
        <p>  {item.description} </p>
        <h2>  ${item.sallary} </h2>
        <span>  {item.name} </span>
      </div>
  </>
  )
}

export default Item