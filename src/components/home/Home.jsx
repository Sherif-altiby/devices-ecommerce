import Category from '../category/Category'
import Random from '../random/Random'
import './Home.css'
 
const Home = () => {
  return (
    <div className='home_page' >

  <Category />
  <Random />
    </div>
  )
}

export default Home