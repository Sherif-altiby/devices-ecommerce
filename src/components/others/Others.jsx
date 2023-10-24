

  import ProductNav from '../productnav/ProductNav'
  import '../clothes/Clothes.css'
  import { OthersData } from '../../data/OthersData'
  import Item from '../item/Item'
  
  
  const Others = () => {
    return (
      <div className='clothes'>
          <ProductNav product="Others" />
      <div className='container' >
          <h2 className='our_products' >Our Products</h2>
          <div className="clothes_container">
          { OthersData.map((i)=> <Item  item={i} key={i.id}/>) }
          </div>
      </div>
      </div>
    )
  }
  
  export default Others