import ProductNav from '../productnav/ProductNav'
import '../clothes/Clothes.css'
import { ShoesData } from '../../data/ShoesData'
import Item from '../item/Item'


const Shoes = () => {
  return (
    <div className='clothes'>
        <ProductNav product="Shoes" />
    <div className='container' >
        <h2 className='our_products' >Our Products</h2>
        <div className="clothes_container">
        { ShoesData.map((i)=> <Item  item={i}key={i.id} />) }
        </div>
    </div>
    </div>
  )
}

export default Shoes