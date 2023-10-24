import './Category.css'

const CategoryItem = ({item}) => {
  return (
    <div className='category_item' >
      <img src={item.img} alt="" />
      <p className="category_name"> {item.name} </p>
    </div>
  )
}

export default CategoryItem