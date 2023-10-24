
import '../clothes/Clothes.css'
import { RandomData } from '../../data/RandomData'
import Item from '../item/Item'


const Random = () => {
  return (
    <div className='clothes random'>
    <div className='container' >
        <h2 className='our_products' >Our Products</h2>
        <div className="clothes_container">
        { RandomData.map((i)=> <Item  item={i} key={i.id}/>) }
        </div>
    </div>
    </div>
  )
}

export default Random