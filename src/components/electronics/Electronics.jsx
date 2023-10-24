
import ProductNav from '../productnav/ProductNav'
import '../clothes/Clothes.css'
import { ElectronicsData } from '../../data/ElectronicsData'
import Item from '../item/Item'


const Electronics = () => {
  return (
    <div className='clothes'>
        <ProductNav product="Electronics" />
    <div className='container' >
        <h2 className='our_products' >Our Products</h2>
        <div className="clothes_container">
        { ElectronicsData.map((i)=> <Item  item={i} key={i.id} />) }
        </div>
    </div>
    </div>
  )
}

export default Electronics