
import ProductNav from '../productnav/ProductNav'
import '../clothes/Clothes.css'
import { FurnitureData } from '../../data/FurnitureData'
import Item from '../item/Item'


const Furniture = () => {
  return (
    <div className='clothes'>
        <ProductNav product="Furniture" />
    <div className='container' >
        <h2 className='our_products' >Our Products</h2>
        <div className="clothes_container">
        { FurnitureData.map((i)=> <Item  item={i} key={i.id} />) }
        </div>
    </div>
    </div>
  )
}

export default Furniture