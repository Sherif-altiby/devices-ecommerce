import ProductNav from '../productnav/ProductNav'
import './Clothes.css'
import { ClothesData } from '../../data/ClothesData'
import Item from '../item/Item'


const Clothes = () => {
  return (
    <div className='clothes'>
        <ProductNav product="Clothes" />
    <div className='container' >
        <h2 className='our_products' >Our Products</h2>
        <div className="clothes_container">
        { ClothesData.map((i)=> <Item  item={i} key={i.id} />) }
        </div>
    </div>
    </div>
  )
}

export default Clothes